import { call, put, takeLatest } from "redux-saga/effects";
import { types } from "../actions/types";
import { actionLogin } from "../actions/UserActions";
import { login } from "../../services/User";

function* loginAsync(params) {
  console.log("PARAMETROS == ", params);
  try {
    const response = yield call(login, params.payload);
    yield put(actionLogin(response.data));
  } catch (error) {
    console.error("error == ", error.message);
  }
}

export default function* saga() {
  yield takeLatest(types.LOGIN_ASYNC, loginAsync);
}
