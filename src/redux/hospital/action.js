import { Dispatch } from "redux";
import { async_func_data } from "../utils/helperfunctions";
import { BAD_STATUS } from "../utils/constants";
import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from "./types";
import { SET_ERROR } from "../error/types";

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
      await dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          token: res?.data?.token,
          hospitalData: "",
        },
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
