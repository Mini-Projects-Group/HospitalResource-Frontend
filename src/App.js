import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Register from "./components/register/Register";
import SellerDashboard from "./components/sellerDashboard/SellerDashboard";
import Signin from "./components/signin/Signin";
import PrivateHospitalRoute from "./reusables/routes/PrivateHospitalRoute";
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
            path='/hospital_dashboard'
            Component={() => {
              return <h1>Hospital Private</h1>;
            }}
          />
          <PrivateSellerRoute
            exact
            path='/seller_dashboard'
            Component={SellerDashboard}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
