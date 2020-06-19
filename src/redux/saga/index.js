import { select, call, delay, put, takeLatest } from "redux-saga/effects";
import { types } from "../actions/types";
import { actions } from "../actions";
import { actionLogin } from "../actions/UserActions";
import { login } from "../../services/User";

function* incrementAsync() {
  const previousState = yield select();
  yield call(console.log, "Estou iniciando o incremento do ", previousState);
  yield delay(2000);
  yield put(actions.increment);

  const state = yield select();
  yield call(console.log, "Eu acabei o incremento do ", state.contador);
}

function* loginAsync(params) {
  console.log("PARAMETROS == ", params);
  try {
    const response = yield call(login, params.payload);
    console.log("RESPOSTA == ", response.data);
    yield call(console.log, response.data, "OLHA A BOBAGEM");
  } catch (error) {
    console.log("error == ", error.message);
  }
}

export default function* saga() {
  yield takeLatest(types.INCREMENT_ASYNC, incrementAsync);
  yield takeLatest(types.LOGIN, loginAsync);
}
