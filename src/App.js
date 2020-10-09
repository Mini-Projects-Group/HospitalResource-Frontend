import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./reusables/routes/PrivateRoute";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={() => <h1>Home</h1>} />
          <Route exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/auth" Component={() => <h1>In</h1>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
