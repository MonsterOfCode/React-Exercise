// All actions uses constants to prevent mistakes
// and the actions are all named with the prefix "action" to by more easily identified inside the components
export const GET_ALL_POSTS_API = "GET_ALL_POSTS_API"
export const actionGetAllPostsApi = () => ({ type: GET_ALL_POSTS_API })

export const GET_ALL_POSTS_API_FAILURE = "GET_ALL_POSTS_API_FAILURE"
export const actionGetAllPostsApiFailure = error => ({ type: GET_ALL_POSTS_API_FAILURE, payload: error })

export const LOAD_POSTS = "LOAD_POSTS"
export const actionLoadPosts = list => ({ type: LOAD_POSTS, payload: list})