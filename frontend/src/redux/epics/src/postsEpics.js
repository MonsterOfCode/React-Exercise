import { ofType } from 'redux-observable';
import { switchMap, catchError, mergeMap, filter, takeUntil } from 'rxjs/operators';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

import { 
    POSTS_GET_ALL_API, POST_MAKE_VOTE_API, POST_DELETE_API, POST_EDIT_API, POSTS_GET_POSTS_BY_CATEGORY_API,
    actionPostsGetAllApiDone, actionPostsGetAllApiFailure, 
    actionPostMakeVoteApiDone, actionPostMakeVoteApiFailure,
    actionPostDeleteApiDone, actionPostDeleteApiFailure,
    actionPostEditApiDone, actionPostEditApiFailure,
    actionPostsByCategoryApiDone, actionPostsByCategoryApiFailure
} from '../../actions'


/*
                    88""Yb  dP"Yb  .dP"Y8 888888 .dP"Y8
                    88__dP dP   Yb `Ybo."   88   `Ybo."
                    88"""  Yb   dP o.`Y8b   88   o.`Y8b
                    88      YbodP  8bodP'   88   8bodP'
*/

// get all posts
export const observableCallApiGetAllPostEpic$ =  action$ =>
    action$.pipe(
        ofType(POSTS_GET_ALL_API),
        switchMap(action => 
            ajax({
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'danymota'
                },
                url: "http://localhost:3001/posts",
                method: 'GET'
                }).pipe(
                mergeMap(data => { // transform the data before be used by the actions
                    return of(data.response)
                }),
                mergeMap(data => {
                    return of(actionPostsGetAllApiDone(data))
                }),
                catchError(error => {
                    return of(actionPostsGetAllApiFailure(error));
                })
            )
        ),
        takeUntil(action$.pipe(
            // if we what a cancel in future
            filter(({type}) => type === "POSTS_GET_ALL_API_CANCELLING")
        ))
    )

// get posts by category
export const observableCallApiGetPostsByCategoryEpic$ =  action$ =>
    action$.pipe(
        ofType(POSTS_GET_POSTS_BY_CATEGORY_API),
        switchMap(action => 
            ajax({
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'danymota'
                },
                url: `http://localhost:3001/${action.payload}/posts`,
                method: 'GET'
                }).pipe(
                mergeMap(data => { // transform the data before be used by the actions
                    return of(data.response)
                }),
                mergeMap(data => {
                    return of(actionPostsByCategoryApiDone(data))
                }),
                catchError(error => {
                    return of(actionPostsByCategoryApiFailure(error));
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
export const observableCallApiPostVoteEpic$ =  action$ =>
    action$.pipe(
        ofType(POST_MAKE_VOTE_API),
        switchMap(({payload}) => 
            ajax({
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'danymota'
                },
                body: {
                    option: payload.positive ? "upVote" : "downVote"
                },
                url: "http://localhost:3001/posts/"+payload.id,
                method: 'POST',
                }).pipe(
                mergeMap(data => { // transform the data before be used by the actions
                    return of(data.response)
                }),
                mergeMap(data => {
                    return of(actionPostMakeVoteApiDone(data))
                }),
                catchError(error => {
                    return of(actionPostMakeVoteApiFailure(error));
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
export const observableCallApiPostEditEpic$ =  action$ =>
    action$.pipe(
        ofType(POST_EDIT_API),
        switchMap(({payload}) => 
            ajax({
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'danymota'
                },
                body: {
                    title: payload.title,
                    body: payload.body
                },
                url: "http://localhost:3001/posts/"+payload.id,
                method: 'PUT',
                }).pipe(
                mergeMap(data => { // transform the data before be used by the actions
                    return of(data.response)
                }),
                mergeMap(data => {
                    return of(actionPostEditApiDone(data))
                }),
                catchError(error => {
                    return of(actionPostEditApiFailure(error));
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
export const observableCallApiPostDeleteEpic$ =  action$ =>
    action$.pipe(
        ofType(POST_DELETE_API),
        switchMap(({payload}) => 
            ajax({
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'danymota'
                },
                url: "http://localhost:3001/posts/"+payload,
                method: 'DELETE',
                }).pipe(
                mergeMap(data => { // transform the data before be used by the actions
                    return of(data.response)
                }),
                mergeMap(data => {
                    return of(actionPostDeleteApiDone(data))
                }),
                catchError(error => {
                    return of(actionPostDeleteApiFailure(error));
                })
            )
        )
    )