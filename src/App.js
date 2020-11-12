import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Auth, { Auth_Hospital, Auth_Seller } from "./components/auth/Auth";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Register from "./components/register/Register";
import Signin from "./components/signin/Signin";
import PrivateHospitalRoute from "./reusables/routes/PrivateHospitalRoute";
import PrivateRoute from "./reusables/routes/PrivateRoute";
import PrivateSellerRoute from "./reusables/routes/PrivateSellerRoute";
function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/signin' component={Signin} />
          <Route exact path='/register' component={Register} />
          <PrivateHospitalRoute
            path='/auth/hospital'
            Component={Auth_Hospital}
          />
          <PrivateSellerRoute path='/auth/seller' Component={Auth_Seller} />
          <PrivateRoute path='/auth' Component={Auth} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
