
import { combineReducers } from 'redux'
import postsReducer from './postsReducer'

// this object is to able us to have the redux state on multiple individual fragments
// to allow a easy management with on the reducers
const rootReducer = combineReducers({
    posts: postsReducer
})

export default rootReducer