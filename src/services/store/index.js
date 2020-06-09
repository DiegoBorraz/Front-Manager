import { createStore } from "redux";
import { combineReducers } from "redux";
import user from "./reducer/User";
import teste from "./reducer/Teste";

const rootReducer = combineReducers({
  userLogged: user,
  teste
});

const store = createStore(rootReducer);

export default store;
