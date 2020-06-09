const LOGIN = "LOGIN";

const INITIAL_STATE = {
  user: {},
  permission: {}
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, user: action.user, permission: action.permission };
    default:
      return state;
  }
};
export default user;
