import {
  GENERAL_SELLER_REDUCER,
  SELLER_LOADING,
  SELLER_LOADED,
  S_LOGIN_SUCCESS,
  S_REGISTER_SUCCESS,
  S_LOGIN_FAIL,
  S_REGISTER_FAIL,
  S_LOGOUT_SUCCESS,
  AUTH_ERROR,
} from "./types";

const initialState = {
  token: null,
  sellerData: null,
  session_expired: false,
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GENERAL_SELLER_REDUCER:
      return {
        ...state,
        ...action.payload,
      };
    case SELLER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case SELLER_LOADED:
      return {
        ...state,
        isLoading: false,
        sellerData: action.payload.sellerData,
        token: action.payload.token,
      };
    case S_LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("type", "seller");
      return {
        ...state,
        isLoading: false,
        token: action.payload.token,
        sellerData: action.payload.sellerData,
      };
    case S_REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case S_LOGIN_FAIL:
    case S_REGISTER_FAIL:
    case S_LOGOUT_SUCCESS:
    case AUTH_ERROR:
      localStorage.removeItem("token");
      localStorage.removeItem("type");
      return {
        ...state,
        sellerData: null,
        token: null,
        isLoading: false,
        session_expired: false,
      };
    default:
      return state;
  }
};
