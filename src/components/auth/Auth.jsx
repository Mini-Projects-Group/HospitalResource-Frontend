import jwt_decode from "jwt-decode";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { HOSPITAL_LOADED } from "../../redux/hospital/types";
import { SELLER_LOADED } from "../../redux/seller/types";
import PrivateHospitalRoute from "../../reusables/routes/PrivateHospitalRoute";
import PrivateSellerRoute from "../../reusables/routes/PrivateSellerRoute";
import HospitalDashboard from "../hospitalDashboard/HospitalDashboard";
import Orders from "../orders/Orders";
import PlaceOrder from "../placeOrder/PlaceOrder";
import SellerDashboard from "../sellerDashboard/SellerDashboard";
import Sidebar from "../sidebar/Sidebar";
import StockAvailable from "../stock/StockAvailable";
import styles from "./Auth.module.css";

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
  }, [dispatch, token, type]);

  return (
    <Switch>
      <PrivateHospitalRoute path='/auth/hospital' Component={Auth_Hospital} />
      <PrivateSellerRoute path='/auth/seller' Component={Auth_Seller} />
    </Switch>
  );
};

export const Auth_Seller = () => (
  <div className={styles.root}>
    <div className={styles.sidebar}>
      <Sidebar />
    </div>
    <div className={styles.main}>
      <Switch>
        <Route
          exact
          path='/auth/seller/dashboard'
          component={SellerDashboard}
        />
        <Route exact path='/auth/seller/orders' component={Orders} />
        <Route exact path='/auth/seller/stock' component={StockAvailable} />
      </Switch>
    </div>
  </div>
);

export const Auth_Hospital = () => (
  <div className={styles.root}>
    <div className={styles.sidebar}>
      <Sidebar />
    </div>
    <div className={styles.main}>
      <Switch>
        <Route
          exact
          path='/auth/hospital/dashboard'
          component={HospitalDashboard}
        />
        <Route exact path='/auth/hospital/orders' component={Orders} />
        <Route exact path='/auth/hospital/stock' component={StockAvailable} />
        <Route exact path='/auth/hospital/placeorder' component={PlaceOrder} />
      </Switch>
    </div>
  </div>
);

export default Auth;
