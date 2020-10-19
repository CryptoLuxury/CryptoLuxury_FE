import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from './components/LandingPage';
import AdminLogin from "../src/components/adminDash/src/layouts/Auth";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/dashboard">
          <AdminLogin />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
