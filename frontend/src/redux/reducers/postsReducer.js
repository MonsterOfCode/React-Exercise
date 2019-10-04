import { 
  POSTS_GET_ALL_API_DONE, POSTS_GET_ALL_API_FAILURE,
  POST_MAKE_VOTE_API_DONE, POST_MAKE_VOTE_API_FAILURE,
  POST_DELETE_API_DONE, POST_DELETE_API_FAILURE,
  POST_EDIT, POST_EDIT_LOCAL_COMMIT, POST_EDIT_API_DONE,
  POST_PREVIEW, POSTS_GET_POSTS_BY_CATEGORY_API_DONE,
  POST_ORDER_BY_DATE, POST_ORDER_BY_VOTES
} from '../actions';


const INITIAL_STATE = {
    list: [],
    editingPost: null,
    previewPost: null,
    apiError: false,
    loading: true,
}


const postsReducer = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {

    case POSTS_GET_ALL_API_DONE:      // on start
    case POSTS_GET_POSTS_BY_CATEGORY_API_DONE:      // on navigate to category
      state.loading = !state.loading
      state.list = payload.sort((a, b) => a.timestamp - b.timestamp)
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

    case POST_PREVIEW:
        state.previewPost = payload
        return state

    case POST_ORDER_BY_DATE:
        // true == ASC | false == DESC
        if(payload){                 // Order by ASC
            state.list = state.list.sort((a, b) => a.timestamp - b.timestamp)
        }else{                       // Order by DESC
            state.list = state.list.sort((a, b) => b.timestamp - a.timestamp)
        }
        return state
    
    case POST_ORDER_BY_VOTES:
        // true == ASC | false == DESC
        if(payload){                 // Order by ASC
            state.list = state.list.sort((a, b) => b.voteScore - a.voteScore)
        }else{                       // Order by DESC
            state.list = state.list.sort((a, b) => a.voteScore - b.voteScore)
        }
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

export default postsReducer