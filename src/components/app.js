import React from "react";
import Header from "./Header";
import "./app.css";
import { Route, withRouter } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Login from "./Login";
import Logout from "./Logout";
import Spark from "./Spark";
import services from "../service";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => ({
  onLoad: payload => dispatch({ type: "DWARF_LOAD", payload })
});

const App = ({ onLoad }) => {
  services.dwarves.all().then(d => onLoad(d));
  return (
    <div className="page">
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/spark" component={Spark} />
      </div>
    </div>
  );
};
export default withRouter(connect(null, mapDispatchToProps)(App));
