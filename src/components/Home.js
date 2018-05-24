import React from "react";
import { Jumbotron, Grid, Button, Well } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Home = props => (
  <Jumbotron>
    <Grid>
      <h1>Occupying Lonely Mountain??</h1>
      <Well>
        <ul>
          <li>
            Have you ever wanted to find a companion that shares your interests
            and tastes?
          </li>
          <li>
            Tired of marrying into your own clan or ending up in a clan with a
            generations long blood feud?
          </li>
          <li>Need to shore up some weak genetics with brighter plumage?</li>
        </ul>
      </Well>
      <p>Forge Finder will help you spark your dwarf-mantic future!</p>
      <p>
        <LinkContainer to="/profile">
          <Button bsStyle="primary">Create a Profile</Button>
        </LinkContainer>
      </p>
    </Grid>
  </Jumbotron>
);

export default Home;
