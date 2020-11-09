import {
  GENERAL_HOSPITAL_REDUCER,
  HOSPITAL_LOADING,
  HOSPITAL_LOADED,
  H_LOGIN_SUCCESS,
  H_REGISTER_SUCCESS,
  H_LOGIN_FAIL,
  H_REGISTER_FAIL,
  H_LOGOUT_SUCCESS,
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
    case H_LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        isLoading: false,
        token: action.payload.token,
        hospitalData: action.payload.hospitalData,
      };
    case H_REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case H_LOGIN_FAIL:
    case H_REGISTER_FAIL:
    case H_LOGOUT_SUCCESS:
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
