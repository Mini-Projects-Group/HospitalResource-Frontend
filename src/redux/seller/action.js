import { async_func_data } from "../utils/helperfunctions";
import { BAD_STATUS } from "../utils/constants";
import jwt_decode from "jwt-decode";
import {
  S_LOGIN_FAIL,
  S_LOGIN_SUCCESS,
  S_REGISTER_FAIL,
  S_REGISTER_SUCCESS,
} from "./types";
import { CLEAR_ERROR, SET_ERROR } from "../error/types";

export const login_seller = (email_id, password) => async (
  dispatch,
  getState
) => {
  try {
    const res = await async_func_data(
      "api/auth/login",
      { email_id, password, type: "seller" },
      "post",
      false
    );

    console.log(res);

    if (res.status === BAD_STATUS) {
      await dispatch({ type: S_LOGIN_FAIL });

      await dispatch({
        type: SET_ERROR,
        payload: {
          message: res?.data?.message,
          status: res?.status,
        },
      });
    } else {
      let decoded = jwt_decode(res?.data?.token);

      //console.log(decoded);
      const data = {
        seller_name: decoded.seller_name,
        email_id: decoded.email_id,
        shop_name: decoded.shop_name,
        address: decoded.address,
        contact_no: decoded.contact_no,
        seller_id: decoded.seller_id,
      };

      await dispatch({
        type: S_LOGIN_SUCCESS,
        payload: {
          token: res?.data?.token,
          sellerData: data,
        },
      });
      await dispatch({
        type: CLEAR_ERROR,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const signup_seller = (
  shop_name,
  seller_name,
  email_id,
  password,
  address,
  contact_no
) => async (dispatch, getState) => {
  try {
    const res = await async_func_data(
      "api/auth/signup",
      {
        shop_name,
        seller_name,
        email_id,
        password,
        address,
        contact_no,
        type: "seller",
      },
      "post",
      false
    );
    console.log(res);
    if (res.status === BAD_STATUS) {
      await dispatch({ type: S_REGISTER_FAIL });
    } else {
      await dispatch({
        type: S_REGISTER_SUCCESS,
        //   payload: {
        //     token: res?.data?.token,
        //     hospitalData: "",
        //   },
      });
    }
    //console.log(res);
  } catch (error) {}
};
