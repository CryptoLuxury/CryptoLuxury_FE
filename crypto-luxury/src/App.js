import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from './components/LandingPage';
import DashHome from './components/adminDash/DashHome';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/admin">
          <DashHome />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
