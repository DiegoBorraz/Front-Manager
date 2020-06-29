import { types } from "../actions/types";

const INITIAL_STATE = {
  contador: 0,
  userLoged: {},
  permission: {}
};

export default function UserReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.LOGIN:
      return { ...state, userLoged: action.payload.user, permission: action.payload.permission };
    default:
      return state;
  }
}
