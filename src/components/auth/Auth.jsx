import React, { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { SELLER_LOADED } from "../../redux/seller/types";
import { HOSPITAL_LOADED } from "../../redux/hospital/types";

const Auth = () => {
  const token = localStorage.getItem("token");
  const type = localStorage.getItem("type");
  const dispatch = useDispatch();
  useEffect(() => {
    async function f() {
      let decoded = jwt_decode(token);

      if (type === "seller") {
        const data = {
          seller_name: decoded.seller_name,
          email_id: decoded.email_id,
          shop_name: decoded.shop_name,
          address: decoded.address,
          contact_no: decoded.contact_no,
          seller_id: decoded.seller_id,
        };

        await dispatch({
          type: SELLER_LOADED,
          payload: {
            sellerData: data,
            token,
          },
        });
      } else {
        const data = {
          hospital_name: decoded.hospital_name,
          email_id: decoded.email_id,
          address: decoded.address,
          contact_no: decoded.contact_no,
          hospital_id: decoded.hospital_id,
        };
        await dispatch({
          type: HOSPITAL_LOADED,
          payload: {
            hospitalData: data,
            token,
          },
        });
      }
    }
    f();
  }, []);

  if (type === "hospital") return <div>Hospital</div>;
  else {
    return <div>Seller</div>;
  }
};

export default Auth;
