import { 
  CATEGORIES_GET_ALL_API_DONE, CATEGORIES_GET_ALL_API_FAILURE,
} from '../actions';


const INITIAL_STATE = {
    list: [],
    apiError: false,
    loading: true,
}


const categoriesReducer = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {

    case CATEGORIES_GET_ALL_API_DONE:      // on start
      state.loading = !state.loading
      state.list = payload
      return state

    case CATEGORIES_GET_ALL_API_FAILURE:   // error on get all categories
      state.apiError = payload
      return state

    default:
        return state
  }
};

export default categoriesReducer