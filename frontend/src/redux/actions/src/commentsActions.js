/*
                     dP""b8  dP"Yb  8b    d8 8b    d8 888888 88b 88 888888 .dP"Y8      dP"Yb  888888     88""Yb  dP"Yb  .dP"Y8 888888
                    dP   `" dP   Yb 88b  d88 88b  d88 88__   88Yb88   88   `Ybo."     dP   Yb 88__       88__dP dP   Yb `Ybo."   88
                    Yb      Yb   dP 88YbdP88 88YbdP88 88""   88 Y88   88   o.`Y8b     Yb   dP 88""       88"""  Yb   dP o.`Y8b   88
                     YboodP  YbodP  88 YY 88 88 YY 88 888888 88  Y8   88   8bodP'      YbodP  88         88      YbodP  8bodP'   88
*/
export const COMMENTS_GET_BY_POST_API = "COMMENTS_GET_BY_POST_API"
export const actionCommentsGetByPostApi = postId => ({ type: COMMENTS_GET_BY_POST_API, payload: postId })

export const COMMENTS_GET_BY_POST_API_DONE = "COMMENTS_GET_BY_POST_API_DONE"
export const actionCommentsGetByPostApiDone = list => ({ type: COMMENTS_GET_BY_POST_API_DONE, payload: list})

export const COMMENTS_GET_BY_POST_API_FAILURE = "COMMENTS_GET_BY_POST_API_FAILURE"
export const actionCommentsGetByPostApiFailure = error => ({ type: COMMENTS_GET_BY_POST_API_FAILURE, payload: error })


/*
                    Yb    dP  dP"Yb  888888 888888 .dP"Y8
                     Yb  dP  dP   Yb   88   88__   `Ybo."
                      YbdP   Yb   dP   88   88""   o.`Y8b
                       YP     YbodP    88   888888 8bodP'
*/
export const COMMENTS_MAKE_VOTE_API = "COMMENTS_MAKE_VOTE_API"
export const actionCommentMakeVoteApi = (id, positive) => ({ type: COMMENTS_MAKE_VOTE_API, payload: {id, positive}})

export const COMMENTS_MAKE_VOTE_API_DONE = "COMMENTS_MAKE_VOTE_API_DONE"
export const actionCommentMakeVoteApiDone = data => ({ type: COMMENTS_MAKE_VOTE_API_DONE, payload: data})

export const COMMENTS_MAKE_VOTE_API_FAILURE = "COMMENTS_MAKE_VOTE_API_FAILURE"
export const actionCommentMakeVoteApiFailure = error => ({ type: COMMENTS_MAKE_VOTE_API_FAILURE, payload: error})



/*
                     dP""b8 88""Yb 888888    db    888888 888888
                    dP   `" 88__dP 88__     dPYb     88   88__
                    Yb      88"Yb  88""    dP__Yb    88   88""
                     YboodP 88  Yb 888888 dP""""Yb   88   888888
*/
export const COMMENT_CREATE_API = "COMMENT_CREATE_API"
export const actionCommentCreateApi = post => ({ type: COMMENT_CREATE_API, payload: post})

export const COMMENT_CREATE_API_DONE = "COMMENT_CREATE_API_DONE"
export const actionCommentCreateApiDone = data => ({ type: COMMENT_CREATE_API_DONE, payload: data})

export const COMMENT_CREATE_API_FAILURE = "COMMENT_CREATE_API_FAILURE"
export const actionCommentCreateApiFailure = data => ({ type: COMMENT_CREATE_API_FAILURE, payload: data})



/*
                    8888b.  888888 88     888888 888888 888888
                     8I  Yb 88__   88     88__     88   88__
                     8I  dY 88""   88  .o 88""     88   88""
                    8888Y"  888888 88ood8 888888   88   888888
*/
export const COMMENTS_DELETE_API = "COMMENTS_DELETE_API"
export const actionCommentDeleteApi = id => ({ type: COMMENTS_DELETE_API, payload: id})

export const COMMENTS_DELETE_API_DONE = "COMMENTS_DELETE_API_DONE"
export const actionCommentDeleteApiDone = data => ({ type: COMMENTS_DELETE_API_DONE, payload: data})

export const COMMENTS_DELETE_API_FAILURE = "COMMENTS_DELETE_API_FAILURE"
export const actionCommentDeleteApiFailure = data => ({ type: COMMENTS_DELETE_API_FAILURE, payload: data})