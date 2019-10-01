import { LOADING } from '../actions';


const INITIALSTATE = {
    Authorization: 'dany-mota',
    loading: false,
}


const baseReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case LOADING:// on type text
    console.log("reducer")
    return {...state, loading: action.payload}
    default:
        return state;
  }
};

export default baseReducer;