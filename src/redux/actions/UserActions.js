import { types } from "./types";

export function actionLogin(params) {
  return {
    type: types.LOGIN,
    payload: params
  };
}
