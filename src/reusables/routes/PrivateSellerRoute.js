import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateSellerRoute = ({ Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PrivateSellerRoute;