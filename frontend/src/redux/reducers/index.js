
import { combineReducers } from 'redux'
import baseReducer from './base'

// this object is to able us to have the redux state on multiple individual fragments
// to allow a easy management with on the reducers
const rootReducer = combineReducers({
    base: baseReducer
})

export default rootReducer