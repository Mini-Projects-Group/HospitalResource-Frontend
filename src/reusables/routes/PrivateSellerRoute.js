import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateSellerRoute = ({ Component, ...rest }) => {
  console.log(localStorage.getItem("token"), localStorage.getItem("type"));

  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("token") &&
        localStorage.getItem("type") &&
        localStorage.getItem("type") === "seller" ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PrivateSellerRoute;
