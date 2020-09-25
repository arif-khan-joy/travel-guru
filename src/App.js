import React, { createContext, useState } from "react";
import "./App.css";
import Home from "./component/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./component/Login/Login";
import fakeData from "./component/fakeData.json";
import Booking from "./component/Booking/Booking";
import Header from "./component/Header/Header";
import Hotel from "./component/Hotel/Hotel";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
export const fakeDataContext = createContext();
function App() {
  const fakeInfo = fakeData;
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <fakeDataContext.Provider
      value={{ fakeInfo, loggedInUser, setLoggedInUser }}
    >
      <Router>
        <br />
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/destination/:name">
            <Booking></Booking>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/hotel">
            <Hotel></Hotel>
          </PrivateRoute>
        </Switch>
      </Router>
    </fakeDataContext.Provider>
  );
}

export default App;
