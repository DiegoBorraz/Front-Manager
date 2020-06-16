import { types } from "../actions/types";

const INITIAL_STATE = 0;

export default function UserReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.INCREMENT:
      return state + 1;
    default:
      return state;
  }
}
