
import { combineReducers } from 'redux-immer';
import produce from 'immer';
import postsReducer from './postsReducer'
import categoriesReducer from './categoriesReducer';


const rootReducer = combineReducers(produce,{
    posts: postsReducer,
    categories: categoriesReducer
})

export default rootReducer