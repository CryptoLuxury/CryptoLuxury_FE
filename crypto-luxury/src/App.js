import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from './components/LandingPage';

import AdminLayout from "../src/adminDash/src/layouts/Admin";
import AuthLayout from "../src/adminDash/src/layouts/Auth";
import RtlLayout from "../src/adminDash/src/layouts/RTL";
import Cart from "./components/Cart";
import Products from "./components/Products";
import Team from "./components/TeamPage";

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
        <Route path="/cart" component={Cart} />
        <Route path="/products" component={Products} />
        <Route path="/team" component={Team} />

      </Switch>
    </Router>
  );
}

export default App;
