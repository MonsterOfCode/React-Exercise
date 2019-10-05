import { ofType } from 'redux-observable';
import { switchMap, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

import { 
    COMMENTS_GET_BY_POST_API, COMMENTS_MAKE_VOTE_API, COMMENTS_DELETE_API, COMMENT_CREATE_API, COMMENT_EDIT_API,
    actionCommentsGetByPostApiDone, actionCommentsGetByPostApiFailure,
    actionCommentMakeVoteApiDone, actionCommentMakeVoteApiFailure,
    actionCommentDeleteApiDone, actionCommentDeleteApiFailure,
    actionCommentCreateApiDone, actionCommentCreateApiFailure,
    actionCommentEditApiDone, actionCommentEditApiFailure
} from '../../actions'


/*
                     dP""b8  dP"Yb  8b    d8 8b    d8 888888 88b 88 888888 .dP"Y8      dP"Yb  888888     88""Yb  dP"Yb  .dP"Y8 888888
                    dP   `" dP   Yb 88b  d88 88b  d88 88__   88Yb88   88   `Ybo."     dP   Yb 88__       88__dP dP   Yb `Ybo."   88
                    Yb      Yb   dP 88YbdP88 88YbdP88 88""   88 Y88   88   o.`Y8b     Yb   dP 88""       88"""  Yb   dP o.`Y8b   88
                     YboodP  YbodP  88 YY 88 88 YY 88 888888 88  Y8   88   8bodP'      YbodP  88         88      YbodP  8bodP'   88
*/
export const observableCallApiGetCommentsByPostEpic$ =  action$ =>
    action$.pipe(
        ofType(COMMENTS_GET_BY_POST_API),
        switchMap(({payload}) => 
            ajax({
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'danymota'
                },
                url: `http://localhost:3001/posts/${payload}/comments`,
                method: 'GET'
                }).pipe(
                mergeMap(data => { // transform the data before be used by the actions
                    return of(data.response)
                }),
                mergeMap(data => {
                    return of(actionCommentsGetByPostApiDone(data))
                }),
                catchError(error => {
                    return of(actionCommentsGetByPostApiFailure(error));
                })
            )
        )
    )


/*
                    Yb    dP  dP"Yb  888888 888888 .dP"Y8
                     Yb  dP  dP   Yb   88   88__   `Ybo."
                      YbdP   Yb   dP   88   88""   o.`Y8b
                       YP     YbodP    88   888888 8bodP'
*/
export const observableCallApiCommentVoteEpic$ =  action$ =>
    action$.pipe(
        ofType(COMMENTS_MAKE_VOTE_API),
        switchMap(({payload}) => 
            ajax({
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'danymota'
                },
                body: {
                    option: payload.positive ? "upVote" : "downVote"
                },
                url: "http://localhost:3001/comments/"+payload.id,
                method: 'POST',
                }).pipe(
                mergeMap(data => { // transform the data before be used by the actions
                    return of(data.response)
                }),
                mergeMap(data => {
                    return of(actionCommentMakeVoteApiDone(data))
                }),
                catchError(error => {
                    return of(actionCommentMakeVoteApiFailure(error));
                })
            )
        )
    )


/*
                     dP""b8 88""Yb 888888    db    888888 888888
                    dP   `" 88__dP 88__     dPYb     88   88__
                    Yb      88"Yb  88""    dP__Yb    88   88""
                     YboodP 88  Yb 888888 dP""""Yb   88   888888
*/
export const observableCallApiCommentCreateNewEpic$ =  action$ =>
    action$.pipe(
        ofType(COMMENT_CREATE_API),
        switchMap(({payload}) => 
            ajax({
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'danymota'
                },
                body: {
                    ...payload
                },
                url: "http://localhost:3001/comments",
                method: 'POST',
                }).pipe(
                mergeMap(data => { // transform the data before be used by the actions
                    return of(data.response)
                }),
                mergeMap(data => {
                    return of(actionCommentCreateApiDone(data))
                }),
                catchError(error => {
                    return of(actionCommentCreateApiFailure(error));
                })
            )
        )
    )


/*
                    888888 8888b.  88 888888
                    88__    8I  Yb 88   88
                    88""    8I  dY 88   88
                    888888 8888Y"  88   88
*/
export const observableCallApiCommentEditEpic$ =  action$ =>
    action$.pipe(
        ofType(COMMENT_EDIT_API),
        switchMap(({payload}) => 
            ajax({
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'danymota'
                },
                body: {
                    ...payload
                },
                url: "http://localhost:3001/comments/"+payload.id,
                method: 'PUT',
                }).pipe(
                mergeMap(data => { // transform the data before be used by the actions
                    return of(data.response)
                }),
                mergeMap(data => {
                    return of(actionCommentEditApiDone(data))
                }),
                catchError(error => {
                    return of(actionCommentEditApiFailure(error));
                })
            )
        )
    )



/*
                    8888b.  888888 88     888888 888888 888888
                     8I  Yb 88__   88     88__     88   88__
                     8I  dY 88""   88  .o 88""     88   88""
                    8888Y"  888888 88ood8 888888   88   888888
*/
export const observableCallApiCommentDeleteEpic$ =  action$ =>
    action$.pipe(
        ofType(COMMENTS_DELETE_API),
        switchMap(({payload}) => 
            ajax({
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'danymota'
                },
                url: "http://localhost:3001/comments/"+payload,
                method: 'DELETE',
                }).pipe(
                mergeMap(data => { // transform the data before be used by the actions
                    return of(data.response)
                }),
                mergeMap(data => {
                    return of(actionCommentDeleteApiDone(data))
                }),
                catchError(error => {
                    return of(actionCommentDeleteApiFailure(error));
                })
            )
        )
    )