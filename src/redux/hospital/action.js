import { Dispatch } from "redux";
import { async_func_data } from "../utils/helperfunctions";
import { BAD_STATUS } from "../utils/constants";
import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from "./types";
import { CLEAR_ERROR, SET_ERROR } from "../error/types";
import jwt_decode from "jwt-decode";

export const login_hospital = (email_id, password) => async (
  dispatch,
  getState
) => {
  try {
    const res = await async_func_data(
      "api/auth/login",
      { email_id, password, type: "hospital" },
      "post",
      false
    );

    if (res.status === BAD_STATUS) {
      await dispatch({ type: LOGIN_FAIL });

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
      const data={
        hospital_name:decoded.hospital_name,
        email_id:decoded.email_id,
        address:decoded.address,
        contact_no:decoded.contact_no,
        hospital_id:decoded.hospital_id
      }

      await dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          token: res?.data?.token,
          hospitalData: data,
        },
      });
      await dispatch({
        type:CLEAR_ERROR
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const signup_hospital = (
  hospital_name,
  email_id,
  password,
  address,
  contact_no
) => async (dispatch, getState) => {
  try {
    const res = await async_func_data(
      "api/auth/signup",
      {
        hospital_name,
        email_id,
        password,
        address,
        contact_no,
        type: "hospital",
      },
      "post",
      false
    );
    if (res.status === BAD_STATUS) {
      await dispatch({ type: REGISTER_FAIL });
    } else {
      await dispatch({
        type: REGISTER_SUCCESS,
        //   payload: {
        //     token: res?.data?.token,
        //     hospitalData: "",
        //   },
      });
    }
    //console.log(res);
  } catch (error) {}
};
