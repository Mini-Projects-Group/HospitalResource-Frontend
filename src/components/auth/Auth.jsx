import React, { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { SELLER_LOADED } from "../../redux/seller/types";
import { HOSPITAL_LOADED } from "../../redux/hospital/types";
import { Link, Route, Switch } from "react-router-dom";

import Sidebar from "../sidebar/Sidebar";
import HospitalDashboard from "../hospitalDashboard/HospitalDashboard";
import Orders from "../orders/Orders";
import StockAvailable from "../stock/StockAvailable";
import SellerCard from "../../reusables/components/card/SellerCard";

import styles from "./Auth.module.css";
import SellerDashboard from "../sellerDashboard/SellerDashboard";

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

  // if (type === "hospital")
  //   return (
  //     <div className={styles.root}>
  //       <div className={styles.sidebar}>
  //         <Sidebar />
  //       </div>
  //       <div className={styles.main}>
  //         <Switch>
  //           <Route
  //             exact
  //             path='/auth/hospital_dashboard'
  //             component={HospitalDashboard}
  //           />
  //           <Route exact path='/auth/hospital_orders' component={Orders} />
  //           <Route
  //             exact
  //             path='/auth/hospital_stock'
  //             component={StockAvailable}
  //           />
  //           <Route
  //             exact
  //             path='/auth/hospital_placeorder'
  //             component={SellerCard}
  //           />
  //         </Switch>
  //       </div>
  //     </div>
  //   );
  // else
  //   return (
  //     <div className={styles.root}>
  //       <div className={styles.sidebar}>
  //         <Sidebar />
  //       </div>
  //       <div className={styles.main}>
  //         <Switch>
  //           <Route
  //             exact
  //             path='/auth/seller_dashboard'
  //             component={SellerDashboard}
  //           />
  //           <Route exact path='/auth/seller_orders' component={Orders} />
  //           <Route exact path='/auth/seller_stock' component={StockAvailable} />
  //         </Switch>
  //       </div>
  //     </div>
  //   );

  return <div></div>;
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
          path='/auth/seller_dashboard'
          component={SellerDashboard}
        />
        <Route exact path='/auth/seller_orders' component={Orders} />
        <Route exact path='/auth/seller_stock' component={StockAvailable} />
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
          path='/auth/hospital_dashboard'
          component={HospitalDashboard}
        />
        <Route exact path='/auth/hospital_orders' component={Orders} />
        <Route exact path='/auth/hospital_stock' component={StockAvailable} />
        <Route exact path='/auth/hospital_placeorder' component={SellerCard} />
      </Switch>
    </div>
  </div>
);

export default Auth;
