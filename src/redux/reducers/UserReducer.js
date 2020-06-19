import { types } from "../actions/types";

const INITIAL_STATE = {
  contador: 0
};

export default function UserReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.INCREMENT:
      return { ...state, contador: state.contador + 1 };
    case types.TESTE:
      return { ...state, mensagem: "TABUADA AAAAAA" };
    case types.LOGIN:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
