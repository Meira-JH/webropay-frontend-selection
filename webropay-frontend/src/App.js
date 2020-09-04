import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContractsPage from "./pages/ContractsPage";
import './App.css'

export default function App() {

  return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <ContractsPage />
          </Route>
        </Switch>
      </Router>
  );
}
