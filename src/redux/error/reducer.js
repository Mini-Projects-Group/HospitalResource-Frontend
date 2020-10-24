import { CLEAR_ERROR, SET_ERROR } from "./types";

const initialstate = {
  message: null,
  status: null,
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        ...action.payload,
      };
    case CLEAR_ERROR:
      return {
        message: null,
        status: null,
      };
    default:
      return state;
  }
};
