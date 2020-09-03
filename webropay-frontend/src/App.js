import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import ContractsPage from "./pages/ContractsPage";
import store from "./store";
import './App.css'

export default function App() {

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <ContractsPage />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}
