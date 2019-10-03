import { 
  POSTS_GET_ALL_API_DONE, POSTS_GET_ALL_API_FAILURE,
  POST_MAKE_VOTE_API_DONE, POST_MAKE_VOTE_API_FAILURE,
  POST_DELETE_API_DONE, POST_DELETE_API_FAILURE,
  POST_EDIT, POST_EDIT_LOCAL_COMMIT, POST_EDIT_API_DONE
} from '../actions';


const INITIAL_STATE = {
    list: [],
    editingPost: null,
    apiError: false,
    loading: true,
}


const baseReducer = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {

    case POSTS_GET_ALL_API_DONE:      // on type text
      state.loading = !state.loading
      state.list = payload
      return state
    
    case POST_MAKE_VOTE_API_DONE:     // on vote done
      state.list.find(element => element.id === payload.id).voteScore = payload.voteScore
      return state
    
    case POST_DELETE_API_DONE:        // on Delete done
      // check if the post is really deleted and make the filter
      state.list = payload.deleted ? state.list.filter(element => element.id !== payload.id) : state.list
      return state

    case POST_EDIT:                   // start editing
    case POST_EDIT_LOCAL_COMMIT:      // end editing and make put
      state.editingPost = payload
      return state

    case POST_EDIT_API_DONE:          // on Edit API done
      state.list = state.list.map(element => element.id === payload.id ? payload : element)
      return state
    
    case POSTS_GET_ALL_API_FAILURE:   // error on get all posts
    case POST_MAKE_VOTE_API_FAILURE:  // error on make a vote
    case POST_DELETE_API_FAILURE:     // error on make a delete
      state.apiError = payload
      return state

    default:
        return state
  }
};

export default baseReducer