import { ofType } from 'redux-observable';
import { switchMap, catchError, mergeMap, filter, takeUntil } from 'rxjs/operators';
import { concat, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

import { GET_ALL_POSTS_API, GETTING_ALL_POSTS_API, actionGettingAllPostsApi, actionGetAllPostsApiDone, actionGetAllPostsApiFailure, actionLoading } from '../../../actions'


export const observableActionGetAllPostEpic$ =  action$ =>
    action$.pipe(
        ofType(GET_ALL_POSTS_API),
        switchMap(action => {
            return of(actionGettingAllPostsApi()) // call other observable to make the promise´
        }),
        takeUntil(action$.pipe(
          filter(({type}) => type.includes("CANCELLING") && type.includes("API"))
        ))
    )

/*
   db    88""Yb 88      dP""b8    db    88     88     .dP"Y8
  dPYb   88__dP 88     dP   `"   dPYb   88     88     `Ybo."
 dP__Yb  88"""  88     Yb       dP__Yb  88  .o 88  .o o.`Y8b
dP""""Yb 88     88      YboodP dP""""Yb 88ood8 88ood8 8bodP'
*/
export const observableFetchAllPostEpic$ = action$ =>
action$.pipe(
    ofType(GETTING_ALL_POSTS_API),
    mergeMap( action =>
        ajax({
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'danymota'
            },
            url: "http://localhost:3001/posts",
            method: 'GET'
            }).pipe(
            mergeMap(data => { //  transform the data before be used by the actions
                return of(data.response)
            }),
            mergeMap(data => {
                return of(actionGetAllPostsApiDone(data))
            }),
            catchError(error => {
                return of(actionGetAllPostsApiFailure(error));
            })
        )
    )
)