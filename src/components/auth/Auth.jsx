import React from "react";
import { Route, Switch } from "react-router-dom";
import SellerCard from "../../reusables/components/card/SellerCard";
import HospitalDashboard from "../hospitalDashboard/HospitalDashboard";
import Orders from "../orders/Orders";
import SellerDashboard from "../sellerDashboard/SellerDashboard";
import Sidebar from "../sidebar/Sidebar";
import StockAvailable from "../stock/StockAvailable";
import styles from "./Auth.module.css";
import MainOrderPage from "../placeOrder/MainOrderPage";
import PlaceOrder from "../placeOrder/PlaceOrder";
import HospitalOrders from "../orders/HospitalOrders";

const Auth = () => {
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
          path='/auth/seller/dashboard'
          component={SellerDashboard}
        />
        <Route exact path='/auth/seller/orders' component={Orders} />
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
        <Route exact path='/auth/hospital/orders' component={HospitalOrders} />
        <Route exact path='/auth/hospital/stock' component={StockAvailable} />
        <Route exact path='/auth/hospital/placeorder' component={PlaceOrder} />
        <Route
          exact
          path='/auth/hospital/placeorder/:sellerid'
          component={MainOrderPage}
        />
      </Switch>
    </div>
  </div>
);

export default Auth;
