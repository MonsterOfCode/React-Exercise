/*
                       db    88     88         88""Yb  dP"Yb  .dP"Y8 888888 .dP"Y8
                      dPYb   88     88         88__dP dP   Yb `Ybo."   88   `Ybo."
                     dP__Yb  88  .o 88  .o     88"""  Yb   dP o.`Y8b   88   o.`Y8b
                    dP""""Yb 88ood8 88ood8     88      YbodP  8bodP'   88   8bodP'
*/
export const POSTS_GET_ALL_API = "POSTS_GET_ALL_API"
export const actionGetAllPostsApi = () => ({ type: POSTS_GET_ALL_API })

export const POSTS_GET_ALL_API_DONE = "POSTS_GET_ALL_API_DONE"
export const actionPostsGetAllApiDone = list => ({ type: POSTS_GET_ALL_API_DONE, payload: list})

export const POSTS_GET_ALL_API_FAILURE = "POSTS_GET_ALL_API_FAILURE"
export const actionPostsGetAllApiFailure = error => ({ type: POSTS_GET_ALL_API_FAILURE, payload: error })

export const POSTS_GET_ALL_API_CANCELLING = "POSTS_GET_ALL_API_CANCELLING"
export const actionPostsGetAllApiCancelling = () => ({ type: POSTS_GET_ALL_API_CANCELLING})


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
                    888888 8888b.  88 888888
                    88__    8I  Yb 88   88
                    88""    8I  dY 88   88
                    888888 8888Y"  88   88
*/
export const POST_EDIT = "POST_EDIT"
export const actionPostEdit = post => ({ type: POST_EDIT, payload: post})

export const POST_EDIT_API = "POST_EDIT_API"
export const actionPostEditApi = post => ({ type: POST_EDIT_API, payload: post})

export const POST_EDIT_LOCAL_COMMIT = "POST_EDIT_LOCAL_COMMIT"
export const actionPostEditLocalCommit = post => ({ type: POST_EDIT_LOCAL_COMMIT, payload: post})

export const POST_EDIT_API_DONE = "POST_EDIT_API_DONE"
export const actionPostEditApiDone = data => ({ type: POST_EDIT_API_DONE, payload: data})

export const POST_EDIT_API_FAILURE = "POST_EDIT_API_FAILURE"
export const actionPostEditApiFailure = data => ({ type: POST_EDIT_API_FAILURE, payload: data})



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