import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import { combineReducers } from "redux";
import UserReducer from "../reducers/UserReducer";
import saga from "../saga";

const persistConfig = {
  key: "root",
  storage
};

const rootReducer = combineReducers({
  UserReducer
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();
const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);
const persistor = persistStore(store);

export { store, persistor };
