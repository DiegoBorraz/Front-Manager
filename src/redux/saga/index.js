import { select, call, delay, put, takeLatest } from "redux-saga/effects";
import { types } from "../actions/types";
import { actions } from "../actions";

function* incrementAsync() {
  const previousState = yield select();
  yield call(console.log, "Estou iniciando o incremento do ", previousState);
  yield delay(2000);
  yield put(actions.increment);

  const state = yield select();
  yield call(console.log, "Eu acabei o incremento do ", state);
}

function* testeAsync() {
  const palavra = "TESTE DIEGO";
  yield call(console.log, palavra, "OLHA A BOBAGEM");
  yield put(actions.testeAsync);
}

export default function* saga() {
  yield takeLatest(types.INCREMENT_ASYNC, incrementAsync);
}
