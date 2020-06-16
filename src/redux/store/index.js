import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import UserReducer from "../reducers/UserReducer";

import createSagaMiddleware from "redux-saga";

import saga from "../saga";

// const rootReducer = combineReducers({
//   UserReducer
// });

//const store = createStore(rootReducer);
const sagaMiddleware = createSagaMiddleware();
const store = createStore(UserReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);

export default store;
