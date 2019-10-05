import { 
  POSTS_GET_ALL_API_DONE, POSTS_GET_ALL_API_FAILURE,
  POST_MAKE_VOTE_API_DONE, POST_MAKE_VOTE_API_FAILURE,
  POST_DELETE_API_DONE, POST_DELETE_API_FAILURE,
  POST_EDIT, POST_EDIT_LOCAL_COMMIT, POST_EDIT_API_DONE,
  POST_PREVIEW, POSTS_GET_POSTS_BY_CATEGORY_API_DONE,
  POST_ORDER_BY_DATE, POST_ORDER_BY_VOTES,
  COMMENTS_GET_BY_POST_API_DONE, COMMENTS_GET_BY_POST_API_FAILURE,
  COMMENTS_MAKE_VOTE_API_DONE, COMMENTS_MAKE_VOTE_API_FAILURE,
  COMMENTS_DELETE_API_DONE, COMMENTS_DELETE_API_FAILURE,
  COMMENT_CREATE_API_DONE, COMMENT_CREATE_API_FAILURE,
  POST_CREATE_API_DONE, POST_CREATE_API_FAILURE
} from '../actions';


const INITIAL_STATE = {
    list: [],
    comments: {
	  list: [],
      loading: true,
    },
    editingPost: null,
    previewPost: null,
    apiError: false,
    loading: true,
}


const postsReducer = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {

    case POSTS_GET_ALL_API_DONE:      			// on start
    case POSTS_GET_POSTS_BY_CATEGORY_API_DONE:  // on navigate to category
      state.loading = !state.loading
      state.list = payload.sort((a, b) => a.timestamp - b.timestamp)
      return state
    
    case POST_MAKE_VOTE_API_DONE:     			// // make vote on a post
      state.list.find(element => element.id === payload.id).voteScore = payload.voteScore
      return state
    
    case POST_DELETE_API_DONE:        			// on Delete done
      // check if the post is really deleted and make the filter
      state.list = payload.deleted ? state.list.filter(element => element.id !== payload.id) : state.list
      return state

    case POST_EDIT:                   			// start editing
    case POST_EDIT_LOCAL_COMMIT:      			// end editing and make put
      state.editingPost = payload
      return state

    case POST_EDIT_API_DONE:          			// on Edit API done
        state.list = state.list.map(element => element.id === payload.id ? payload : element)
      return state

    case POST_PREVIEW:							// load the post to preview
        state.previewPost = payload
        return state

    case POST_ORDER_BY_DATE:					// order the posts by date
        // true == ASC | false == DESC
        if(payload){                 			// Order by ASC
            state.list = state.list.sort((a, b) => a.timestamp - b.timestamp)
        }else{                       			// Order by DESC
            state.list = state.list.sort((a, b) => b.timestamp - a.timestamp)
        }
        return state
    
    case POST_ORDER_BY_VOTES:					// order the posts by votes
        // true == ASC | false == DESC
        if(payload){                 			// Order by ASC
            state.list = state.list.sort((a, b) => b.voteScore - a.voteScore)
        }else{                       			// Order by DESC
            state.list = state.list.sort((a, b) => a.voteScore - b.voteScore)
        }
		return state
		
	case POST_CREATE_API_DONE:					// create a new post
		state.list.push(payload)
		return state

    case COMMENTS_GET_BY_POST_API_DONE:			// get comments of post
		state.comments.loading = !state.comments.loading
		state.comments.list = payload
		return state
		  
	case COMMENTS_MAKE_VOTE_API_DONE:     		// make vote on comment
		state.comments.list.find(element => element.id === payload.id).voteScore = payload.voteScore
		return state

	case COMMENT_CREATE_API_DONE:				// create a new comment of a post
		++state.previewPost.commentCount
		state.comments.list.push(payload)
		return state;

	case COMMENTS_DELETE_API_DONE:        		// on Delete on comment
		// check if the post is really deleted and make the filter
		--state.previewPost.commentCount
		state.comments.list = payload.deleted ? state.comments.list.filter(element => element.id !== payload.id) : state.comments.list
		return state


    case POSTS_GET_ALL_API_FAILURE:   			// error on get all posts
    case POST_CREATE_API_FAILURE:   			// error on get create a post
    case POST_MAKE_VOTE_API_FAILURE:  			// error on make a vote on post
    case POST_DELETE_API_FAILURE:     			// error on make delete of post
	case COMMENTS_GET_BY_POST_API_FAILURE:     	// error on get all comments of post
	case COMMENTS_MAKE_VOTE_API_FAILURE:  		// error on make a vote on comment
	case COMMENT_CREATE_API_FAILURE:  			// error on create new comment
    case COMMENTS_DELETE_API_FAILURE:     		// error on make delete of comment
      state.apiError = payload
      return state

    default:
        return state
  }
};

export default postsReducer