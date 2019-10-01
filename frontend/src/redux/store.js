import { createStore, applyMiddleware, compose } from "redux";
// entrypoint to reducers
import rootReducer from "./reducers";
//Redux Observable
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './epics'
const epicMiddleware = createEpicMiddleware();





//Redux devTolls
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(epicMiddleware)))
epicMiddleware.run(rootEpic);

export default store;