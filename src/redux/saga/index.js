import { call, put, takeLatest } from "redux-saga/effects";
import { types } from "../actions/types";
import { actionLogin } from "../actions/UserActions";
import { login } from "../../services/User";
import { login as loginToken } from "../../services/Auth";

function* loginAsync(params) {
  console.log("PARAMETROS == ", params);
  try {
    const response = yield call(login, params.payload);
    loginToken(response.data.token);
    yield put(actionLogin(response.data));
  } catch (error) {
    console.error("error == ", error.response.data);
  }
}

export default function* saga() {
  yield takeLatest(types.LOGIN_ASYNC, loginAsync);
}
