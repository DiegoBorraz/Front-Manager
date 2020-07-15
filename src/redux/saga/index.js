import { call, put, takeLatest } from "redux-saga/effects";
import { types } from "../actions/types";
import { actionLogin } from "../actions/UserActions";
import { login } from "../../services/User";
import { login as loginToken } from "../../services/Auth";
import { decryptJSON } from "../../services/hash";

function* loginAsync(params) {
  try {
    let response = yield call(login, params.payload);
    response.data.user = yield decryptJSON(response.data.user);
    response.data.permission = yield decryptJSON(response.data.permission);
    loginToken(response.data.token);
    yield put(actionLogin(response.data));
  } catch (error) {
    console.error("error == ", error.response.data);
  }
}

export default function* saga() {
  yield takeLatest(types.LOGIN_ASYNC, loginAsync);
}
