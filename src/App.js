import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Auth from "./components/auth/Auth";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Register from "./components/register/Register";
import SellerDashboard from "./components/sellerDashboard/SellerDashboard";
import Signin from "./components/signin/Signin";
import PrivateHospitalRoute from "./reusables/routes/PrivateHospitalRoute";
import PrivateRoute from "./reusables/routes/PrivateRoute";
import PrivateSellerRoute from "./reusables/routes/PrivateSellerRoute";
import SellerCard from "./reusables/components/card/SellerCard";
function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        {/* <SellerCard /> */}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/signin' component={Signin} />
          <Route exact path='/register' component={Register} />

          <PrivateRoute exact path='/auth' Component={Auth} />
          <PrivateHospitalRoute
            exact
            path='/auth/hospital_dashboard'
            Component={() => {
              return <h1>Hospital Private</h1>;
            }}
          />
          <PrivateSellerRoute
            exact
            path='/auth/seller_dashboard'
            Component={SellerDashboard}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
