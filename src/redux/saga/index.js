import { call, put, takeLatest } from "redux-saga/effects";
import { types } from "../actions/types";
import { actionLogin } from "../actions/UserActions";
import { login } from "../../services/User";
import { login as loginToken } from "../../services/Auth";
import { decryptJSON } from "../../services/hash";

function* loginAsync(params) {
  try {
    let response = yield call(login, params.payload);
    response = yield decryptJSON(response.data);
    loginToken(response.token);
    yield put(actionLogin(response));
  } catch (error) {
    console.error("error == ", error.response.data);
  }
}

export default function* saga() {
  yield takeLatest(types.LOGIN_ASYNC, loginAsync);
}
