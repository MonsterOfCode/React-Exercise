import { ofType } from 'redux-observable';
import { switchMap, catchError, mergeMap, filter, takeUntil } from 'rxjs/operators';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

import { 
    CATEGORIES_GET_ALL_API,
    actionCategoriesGetAllApiDone, actionCategoriesGetAllApiFailure
} from '../../actions'


/*
                       db    88     88          dP""b8    db    888888 888888  dP""b8  dP"Yb  88""Yb 88 888888 .dP"Y8
                      dPYb   88     88         dP   `"   dPYb     88   88__   dP   `" dP   Yb 88__dP 88 88__   `Ybo."
                     dP__Yb  88  .o 88  .o     Yb       dP__Yb    88   88""   Yb  "88 Yb   dP 88"Yb  88 88""   o.`Y8b
                    dP""""Yb 88ood8 88ood8      YboodP dP""""Yb   88   888888  YboodP  YbodP  88  Yb 88 888888 8bodP'
*/
export const observableCallApiGetAllCategoriesEpic$ =  action$ =>
    action$.pipe(
        ofType(CATEGORIES_GET_ALL_API),
        switchMap(action => 
            ajax({
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'danymota'
                },
                url: "http://localhost:3001/categories",
                method: 'GET'
                }).pipe(
                mergeMap(data => { // transform the data before be used by the actions
                    return of(data.response.categories)
                }),
                mergeMap(data => {
                    return of(actionCategoriesGetAllApiDone(data))
                }),
                catchError(error => {
                    return of(actionCategoriesGetAllApiFailure(error));
                })
            )
        ),
        takeUntil(action$.pipe(
            // if we what a cancel in future
            filter(({type}) => type === "POSTS_GET_ALL_API_CANCELLING")
        ))
    )