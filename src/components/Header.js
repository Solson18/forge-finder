import React from "react";
import { Navbar, NavItem, Nav } from "react-bootstrap";
import beard from "./beard.svg";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Login from "./Login";
import Logout from "./Logout";

const Header = props => {
  return (
    <Router>
      <div>
        <Navbar inverse fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#" style={{ display: "flex" }}>
                <img src={beard} height={20} />
                Forge Finder
              </a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/logout">Logout</NavLink>
          </Nav>
        </Navbar>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
      </div>
    </Router>
  );
};

export default Header;
