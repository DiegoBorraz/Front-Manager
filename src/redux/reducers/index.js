import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import UserReducer from "./UserReducer";

import createSagaMiddleware from "redux-saga";

import saga from "../../redux/saga";

const rootReducer = combineReducers({
  UserReducer
});

//const store = createStore(rootReducer);
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);

export default store;
