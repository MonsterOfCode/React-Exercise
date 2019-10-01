import { GET_ALL_POSTS_API_DONE, GET_ALL_POSTS_API_FAILURE } from '../actions';


const INITIALSTATE = {
    list: [],
    apiError: false,
    loading: true,
}

const toggleLoading = ({loading}) =>{
  return !loading
}

const baseReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    
    case GET_ALL_POSTS_API_DONE:// on type text
    return {...state, loading: toggleLoading(state), list: action.payload}

    case GET_ALL_POSTS_API_FAILURE:// on type text
    return {...state, apiError: action.payload}
    default:
        return state;
  }
};

export default baseReducer;