import { createStore } from "redux";

const ADD_USER = "ADD_USER";

const INITIAL_STATE = {
  user: {}
};

function courses(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_USER:
      return { ...state, user: action.user };
    default:
      return state;
  }
}

const store = createStore(courses);

export default store;
