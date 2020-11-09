import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Auth from "./components/auth/Auth";
import Dashboard from "./components/dashboard/Dashboard";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Register from "./components/register/Register";
import SellerDashboard from "./components/sellerDashboard/SellerDashboard";
import Signin from "./components/signin/Signin";
import PrivateRoute from "./reusables/routes/PrivateRoute";
function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/sd' component={SellerDashboard} />
          <Route exact path='/signin' component={Signin} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/dashboard' component={Dashboard} />
          <PrivateRoute exact path='/auth' Component={Auth} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
