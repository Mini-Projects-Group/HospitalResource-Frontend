import {
  GENERAL_HOSPITAL_REDUCER,
  HOSPITAL_LOADING,
  HOSPITAL_LOADED,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  LOGIN_FAIL,
  REGISTER_FAIL,
  LOGOUT_SUCCESS,
  AUTH_ERROR,
} from "./types";

const initialState = {
  token: null,
  hospitalData: null,
  session_expired: false,
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GENERAL_HOSPITAL_REDUCER:
      return {
        ...state,
        ...action.payload,
      };
    case HOSPITAL_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case HOSPITAL_LOADED:
      return {
        ...state,
        isLoading: false,
        hospitalData: action.payload,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        isLoading: false,
        token: action.payload.token,
        hospitalData: action.payload.hospitalData,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case LOGIN_FAIL:
    case REGISTER_FAIL:
    case LOGOUT_SUCCESS:
    case AUTH_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        hospitalData: null,
        token: null,
        isLoading: false,
        session_expired: false,
      };
    default:
      return state;
  }
};
