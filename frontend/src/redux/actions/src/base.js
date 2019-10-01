// All actions uses constants to prevent mistakes
// and the actions are all named with the prefix "action" to by more easily identified inside the components
export const LOADING = "LOADING"
export const actionLoading = boolean => ({type: LOADING, payload: boolean})