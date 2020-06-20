import { types } from "./types";

export function actionLoginAsync(params) {
  return {
    type: types.LOGIN_ASYNC,
    payload: params
  };
}

export function actionLogin(params) {
  return {
    type: types.LOGIN,
    payload: params
  };
}
