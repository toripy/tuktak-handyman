import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from "./component/Dashboard/Dashboard/Dashboard";
import ContactUs from "./component/Home/ContactUs/ContactUs";
import Home from "./component/Home/Home/Home";
import OurTeam from "./component/Home/OurTeam/OurTeam";
import Portfolio from "./component/Home/Portfolio/Portfolio";
import Login from "./component/Login/Login/Login";
import PrivateRoute from "./component/Login/PrivateRoute/PrivateRoute";
export const UserContext = createContext();

function App( { props } ) {
  const [loggedInUser, setLoggedInUser] = useState( { isAdmin: false } );
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/ourTeam">
            <OurTeam />
          </Route>
          <Route path="/contactUs">
            <ContactUs />
          </Route>

          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>

      </Router>

    </UserContext.Provider>

  );
}

export default App;
