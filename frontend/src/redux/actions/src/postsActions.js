// All actions uses constants to prevent mistakes
// and the actions are all named with the prefix "action" to by more easily identified inside the components
export const GET_ALL_POSTS_API = "GET_ALL_POSTS_API"
export const actionGetAllPostsApi = () => ({ type: GET_ALL_POSTS_API })

export const GETTING_ALL_POSTS_API = "GETTING_ALL_POSTS_API"
export const actionGettingAllPostsApi = () => ({ type: GETTING_ALL_POSTS_API })

export const GET_ALL_POSTS_API_DONE = "GET_ALL_POSTS_API_DONE"
export const actionGetAllPostsApiDone = list => ({ type: GET_ALL_POSTS_API_DONE, payload: list})

export const GET_ALL_POSTS_API_FAILURE = "GET_ALL_POSTS_API_FAILURE"
export const actionGetAllPostsApiFailure = error => ({ type: GET_ALL_POSTS_API_FAILURE, payload: error })