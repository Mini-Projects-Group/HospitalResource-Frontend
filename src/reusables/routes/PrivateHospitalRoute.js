import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateHospitalRoute = ({ Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("token") &&
        localStorage.getItem("type") === "hospital" ? (
          <Component {...props} />
        ) : (
          <Redirect to='/auth' />
        )
      }
    />
  );
};

export default PrivateHospitalRoute;
