import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from './components/LandingPage';

import AdminLayout from "../src/adminDash/src/layouts/Admin";
import AuthLayout from "../src/adminDash/src/layouts/Auth";
import RtlLayout from "../src/adminDash/src/layouts/RTL";
import UserLoginLayout from "./components/dashComps/UserLog";
import UserRegisterLayout from "./components/dashComps/UserRegister";
import Cart from "./components/Cart";

import { createBrowserHistory } from "history";

//dash
const hist = createBrowserHistory();

function App() {
  return (
    <Router history={hist}>
      <Switch>

        <Route exact path="/">
          <LandingPage />
        </Route>

        <Route path="/admin" component={AdminLayout} />
        <Route path="/admin/rtl" component={RtlLayout} />
        <Route path="/admin/login" component={AuthLayout} />
        <Route path="/login" component={UserLoginLayout} />
        <Route path="/register" component={UserRegisterLayout} />
        <Route path="/cart" component={Cart} />

      </Switch>
    </Router>
  );
}

export default App;
