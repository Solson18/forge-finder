import React from "react";
import Header from "./Header";
import "./app.css";
import { Route, withRouter } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Login from "./Login";
import Logout from "./Logout";

const App = props => (
  <div>
    <Header />
    <Route exact path="/" component={Home} />
    <Route path="/profile" component={Profile} />
    <Route path="/login" component={Login} />
    <Route path="/logout" component={Logout} />
  </div>
);

export default withRouter(App);
