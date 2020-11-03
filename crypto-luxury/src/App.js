import React, { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";

import AdminLayout from "../src/adminDash/src/layouts/Admin";
import AuthLayout from "../src/adminDash/src/layouts/Auth";
import RtlLayout from "../src/adminDash/src/layouts/RTL";
import Cart from "./components/Cart";
import Products from "./components/Watches";
import Team from "./components/TeamPage";
import UserLogin from "./components/UserLog";
import UserRegister from "./components/UserRegister";
import PrivateRoute from "./utils/PrivateRoute";
import Cards from "./components/Cards";

import { createBrowserHistory } from "history";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

//dash
const hist = createBrowserHistory();

function App() {
  return (
    <Router history={hist}>
      <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <PrivateRoute path="/admin" component={AdminLayout} />
          {/* 
          <Route path="/cart" component={Cart} /> */}

          <Route path="/watches" component={Products} />
          <Route path="/cards" component={Cards} />
          <Route path="/team" component={Team} />
          <Route path="/login" component={UserLogin} />
      </Switch>
    </Router>
  );
}

export default App;
