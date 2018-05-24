import React from "react";
import { Jumbotron, Grid, Panel, Col } from "react-bootstrap";
import { connect } from "react-redux";
import Beard from "./Beard";

const mapStateToProps = state => ({
  dwarves: state.dwarves
});

const Spark = ({ dwarves }) => (
  <Jumbotron>
    <Grid>
      {dwarves.map(d => (
        <Col sm={4}>
          <Panel>
            <Panel.Heading>
              <Panel.Title>
                <Beard height={20} color={d.beard} />
                {d.name} the {d.occupation}
              </Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              Clan: {d.clan}
              <br />
              Height: {d.height}
              <br />
              Occupation: {d.occupation}
              <br />
              Beard: {d.beard}
            </Panel.Body>
          </Panel>
        </Col>
      ))}
    </Grid>
  </Jumbotron>
);

export default connect(mapStateToProps)(Spark);
