import React from "react";
import { Jumbotron, Grid, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const Home = props => (
  <Jumbotron>
    <Grid>
      <h1> Occupying Lonely Mountian?</h1>
      <p>
        <ul>
          <li>
            Have you ever wanted to find a companion that shares your tastes?
          </li>
          <li>
            Tired of marring into your own clanwith a generations long blood
            feud?
          </li>
          <li>Ned to shore up some weak genetics with brighter plumage?</li>
        </ul>
      </p>
      <p>Froge Finder will help you spark your dearf-mantic future!</p>
      <p>
        <LinkContainer to="/profile">
          <Button bsStyle="primary">Create a Profile</Button>
        </LinkContainer>
      </p>
    </Grid>
  </Jumbotron>
);

export default Home;
