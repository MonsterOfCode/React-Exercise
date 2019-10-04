
/*
                       db    88     88          dP""b8    db    888888 888888  dP""b8  dP"Yb  88""Yb 88 888888 .dP"Y8
                      dPYb   88     88         dP   `"   dPYb     88   88__   dP   `" dP   Yb 88__dP 88 88__   `Ybo."
                     dP__Yb  88  .o 88  .o     Yb       dP__Yb    88   88""   Yb  "88 Yb   dP 88"Yb  88 88""   o.`Y8b
                    dP""""Yb 88ood8 88ood8      YboodP dP""""Yb   88   888888  YboodP  YbodP  88  Yb 88 888888 8bodP'
*/

export const CATEGORIES_GET_ALL_API = "CATEGORIES_GET_ALL_API"
export const actionGetAllCategoriesApi = () => ({ type: CATEGORIES_GET_ALL_API })

export const CATEGORIES_GET_ALL_API_DONE = "CATEGORIES_GET_ALL_API_DONE"
export const actionCategoriesGetAllApiDone = list => ({ type: CATEGORIES_GET_ALL_API_DONE, payload: list})

export const CATEGORIES_GET_ALL_API_FAILURE = "CATEGORIES_GET_ALL_API_FAILURE"
export const actionCategoriesGetAllApiFailure = error => ({ type: CATEGORIES_GET_ALL_API_FAILURE, payload: error })

export const CATEGORIES_GET_ALL_API_CANCELLING = "CATEGORIES_GET_ALL_API_CANCELLING"
export const actionCategoriesGetAllApiCancelling = () => ({ type: CATEGORIES_GET_ALL_API_CANCELLING})