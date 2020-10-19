import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from './components/LandingPage';

import AdminLayout from "../src/adminDash/src/layouts/Admin.js";

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
      </Switch>
    </Router>
  );
}

export default App;
