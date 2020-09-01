import React, {useEffect, useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ContractsPage from './pages/ContractsPage';

export default function App() {
  // const [currentUser, setCurrentUser] = useState()
  // const [authLoading, setAuthLoading] = useState(true)

  // useEffect(() => {
  //   return firebase.auth().onAuthStateChanged(function(user) {
  //     if (user) {
  //       setCurrentUser(user)
  //     } else {
  //       setCurrentUser(null)
  //     }
  //     setAuthLoading(false)
  //   })
  // }, [])

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <ContractsPage/>
        </Route>
      </Switch>
    </Router>
  );
}
