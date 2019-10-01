import { ofType } from 'redux-observable';
import { switchMap, catchError, mergeMap, filter, takeUntil } from 'rxjs/operators';
import { concat, of } from 'rxjs';
import Axios from  'axios-observable';

import { GET_ALL_POSTS_API, actionGetAllPostsApiFailure, actionLoading } from '../../../actions'


// export const observableFetchAllPostEpic$ = action$ =>{
//   return (ajax({
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'danymota'
//         },
//         url: "http://localhost:3001/posts",
//         method: 'GET'
//         }).pipe(
//         mergeMap(data => { // Map used to transform the data before be used by the actions
//             console.log("fetch epic ", data)
//             return of(data)
//         }),
//         mergeMap(data => {
//             console.log("fetch epic 2", data)
//         return actionLoading(false)
//         }),
//         catchError(error => {
//         return of(actionGetAllPostsApiFailure(error));
//         })
//     )
//   )}


export const observableFetchAllPostEpic$ = action$ =>{
    return(
        Axios.get('http://localhost:3001/posts').subscribe(
            response => console.log(response),
            error => console.log(error)
        )
    )
}

export const observableActionGetAllPostEpic$ =  action$ => // enable when is to load post
    action$.pipe(
        ofType(GET_ALL_POSTS_API),
        switchMap(action => {
            return concat( // concat multi action to dispatch
                of(actionLoading(true)),
                of(observableFetchAllPostEpic$()) // call other observable to make the promise
            )
        }),
        takeUntil(action$.pipe(
          filter(({type}) => type.includes("CANCELLING") && type.includes("API"))
        ))
    )
