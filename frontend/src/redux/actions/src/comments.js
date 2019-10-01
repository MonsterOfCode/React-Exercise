// All actions uses constants to prevent mistakes
// and the actions are all named with the prefix "action" to by more easily identified inside the components
export const NEW_COMMENT = "NEW_COMMENT"
export const actionNewComment = data => ({ type: NEW_COMMENT, payload: data})