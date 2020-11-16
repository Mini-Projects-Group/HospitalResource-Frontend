import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Auth from "./components/auth/Auth";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Register from "./components/register/Register";
import Signin from "./components/signin/Signin";
import PrivateRoute from "./reusables/routes/PrivateRoute";
import PrivateSellerRoute from "./reusables/routes/PrivateSellerRoute";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { SELLER_LOADED } from "./redux/seller/types";
import { HOSPITAL_LOADED } from "./redux/hospital/types";
function App() {
  const token = localStorage.getItem("token");
  const type = localStorage.getItem("type");
  const dispatch = useDispatch();
  useEffect(() => {
    async function f() {
      if (token) {
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
    }
    f();
  }, [dispatch, token, type]);
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
<<<<<<< HEAD
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/register" component={Register} />
          <PrivateHospitalRoute
            path="/auth/hospital"
            Component={Auth_Hospital}
          />
          <PrivateSellerRoute path="/auth/seller" Component={Auth_Seller} />
          <PrivateRoute path="/auth" Component={Auth} />
=======
          <Route exact path='/' component={Home} />
          <Route exact path='/signin' component={Signin} />
          <Route exact path='/register' component={Register} />
          <PrivateRoute path='/auth' Component={Auth} />
>>>>>>> master
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
