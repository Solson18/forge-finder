import React from "react";
import { Navbar, NavItem, Nav } from "react-bootstrap";
import Beard from "./Beard";
import { LinkContainer } from "react-router-bootstrap";

const Header = props => {
  return (
    <Navbar inverse fluid>
      <Navbar.Header>
        <Navbar.Brand>
          <a style={{ display: "flex" }}>
            <Beard />
            Forge Finder
          </a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        <LinkContainer exact to="/">
          <NavItem eventKey={1}>Home</NavItem>
        </LinkContainer>
        <LinkContainer to="/spark">
          <NavItem eventKey={2}>Spark</NavItem>
        </LinkContainer>
        <LinkContainer to="/profile">
          <NavItem eventKey={3}>Profile</NavItem>
        </LinkContainer>
        <LinkContainer to="/login">
          <NavItem eventKey={4}>Login</NavItem>
        </LinkContainer>
        <LinkContainer to="/logout">
          <NavItem eventKey={5}>Logout</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
};

export default Header;
