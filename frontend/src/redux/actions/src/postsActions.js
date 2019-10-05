/*
                    88""Yb  dP"Yb  .dP"Y8 888888 .dP"Y8
                    88__dP dP   Yb `Ybo."   88   `Ybo."
                    88"""  Yb   dP o.`Y8b   88   o.`Y8b
                    88      YbodP  8bodP'   88   8bodP'
*/
export const POSTS_GET_ALL_API = "POSTS_GET_ALL_API"
export const actionGetAllPostsApi = () => ({ type: POSTS_GET_ALL_API })

export const POSTS_GET_ALL_API_DONE = "POSTS_GET_ALL_API_DONE"
export const actionPostsGetAllApiDone = list => ({ type: POSTS_GET_ALL_API_DONE, payload: list})

export const POSTS_GET_ALL_API_FAILURE = "POSTS_GET_ALL_API_FAILURE"
export const actionPostsGetAllApiFailure = error => ({ type: POSTS_GET_ALL_API_FAILURE, payload: error })

export const POSTS_GET_ALL_API_CANCELLING = "POSTS_GET_ALL_API_CANCELLING"
export const actionPostsGetAllApiCancelling = () => ({ type: POSTS_GET_ALL_API_CANCELLING})

export const POSTS_GET_POSTS_BY_CATEGORY_API = "POSTS_GET_POSTS_BY_CATEGORY_API"
export const actionGetPostsByCategoryApi = category => ({ type: POSTS_GET_POSTS_BY_CATEGORY_API, payload: category})

export const POSTS_GET_POSTS_BY_CATEGORY_API_DONE = "POSTS_GET_POSTS_BY_CATEGORY_API_DONE"
export const actionPostsByCategoryApiDone = list => ({ type: POSTS_GET_POSTS_BY_CATEGORY_API_DONE, payload: list})

export const POSTS_GET_POSTS_BY_CATEGORY_API_FAILURE = "POSTS_GET_POSTS_BY_CATEGORY_API_FAILURE"
export const actionPostsByCategoryApiFailure = error => ({ type: POSTS_GET_POSTS_BY_CATEGORY_API_FAILURE, payload: error })


/*
                    Yb    dP  dP"Yb  888888 888888 .dP"Y8
                     Yb  dP  dP   Yb   88   88__   `Ybo."
                      YbdP   Yb   dP   88   88""   o.`Y8b
                       YP     YbodP    88   888888 8bodP'
*/
export const POST_MAKE_VOTE_API = "POST_MAKE_VOTE_API"
export const actionPostMakeVoteApi = (id, positive) => ({ type: POST_MAKE_VOTE_API, payload: {id, positive}})

export const POST_MAKE_VOTE_API_DONE = "POST_MAKE_VOTE_API_DONE"
export const actionPostMakeVoteApiDone = data => ({ type: POST_MAKE_VOTE_API_DONE, payload: data})

export const POST_MAKE_VOTE_API_FAILURE = "POST_MAKE_VOTE_API_FAILURE"
export const actionPostMakeVoteApiFailure = error => ({ type: POST_MAKE_VOTE_API_FAILURE, payload: error})



/*
                     dP""b8 88""Yb 888888    db    888888 888888
                    dP   `" 88__dP 88__     dPYb     88   88__
                    Yb      88"Yb  88""    dP__Yb    88   88""
                     YboodP 88  Yb 888888 dP""""Yb   88   888888
*/
export const POST_CREATE_API = "POST_CREATE_API"
export const actionPostCreateApi = post => ({ type: POST_CREATE_API, payload: post})

export const POST_CREATE_API_DONE = "POST_CREATE_API_DONE"
export const actionPostCreateApiDone = data => ({ type: POST_CREATE_API_DONE, payload: data})

export const POST_CREATE_API_FAILURE = "POST_CREATE_API_FAILURE"
export const actionPostCreateApiFailure = data => ({ type: POST_CREATE_API_FAILURE, payload: data})


/*
                    888888 8888b.  88 888888
                    88__    8I  Yb 88   88
                    88""    8I  dY 88   88
                    888888 8888Y"  88   88
*/
export const POST_EDIT = "POST_EDIT"
export const actionPostEdit = post => ({ type: POST_EDIT, payload: post})

export const POST_EDIT_API = "POST_EDIT_API"
export const actionPostEditApi = post => ({ type: POST_EDIT_API, payload: post})

export const POST_EDIT_API_DONE = "POST_EDIT_API_DONE"
export const actionPostEditApiDone = data => ({ type: POST_EDIT_API_DONE, payload: data})

export const POST_EDIT_API_FAILURE = "POST_EDIT_API_FAILURE"
export const actionPostEditApiFailure = data => ({ type: POST_EDIT_API_FAILURE, payload: data})


/*
                    88""Yb 88""Yb 888888 Yb    dP 88 888888 Yb        dP
                    88__dP 88__dP 88__    Yb  dP  88 88__    Yb  db  dP
                    88"""  88"Yb  88""     YbdP   88 88""     YbdPYbdP
                    88     88  Yb 888888    YP    88 888888    YP  YP
*/
export const POST_PREVIEW = "POST_PREVIEW"
export const actionPostPreview = post => ({ type: POST_PREVIEW, payload: post})


/*
                    8888b.  888888 88     888888 888888 888888
                     8I  Yb 88__   88     88__     88   88__
                     8I  dY 88""   88  .o 88""     88   88""
                    8888Y"  888888 88ood8 888888   88   888888
*/
export const POST_DELETE_API = "POST_DELETE_API"
export const actionPostDeleteApi = id => ({ type: POST_DELETE_API, payload: id})

export const POST_DELETE_API_DONE = "POST_DELETE_API_DONE"
export const actionPostDeleteApiDone = data => ({ type: POST_DELETE_API_DONE, payload: data})

export const POST_DELETE_API_FAILURE = "POST_DELETE_API_FAILURE"
export const actionPostDeleteApiFailure = data => ({ type: POST_DELETE_API_FAILURE, payload: data})


/*
 dP"Yb  88""Yb 8888b.  888888 88""Yb .dP"Y8
dP   Yb 88__dP  8I  Yb 88__   88__dP `Ybo."
Yb   dP 88"Yb   8I  dY 88""   88"Yb  o.`Y8b
 YbodP  88  Yb 8888Y"  888888 88  Yb 8bodP'
*/
export const POST_ORDER_BY_DATE = "POST_ORDER_BY_DATE"
export const actionPostOrderByDate = desc => ({ type: POST_ORDER_BY_DATE, payload: desc})

export const POST_ORDER_BY_VOTES = "POST_ORDER_BY_VOTES"
export const actionPostOrderByVotes = desc => ({ type: POST_ORDER_BY_VOTES, payload: desc})