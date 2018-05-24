import React from "react";
import {
  Jumbotron,
  Grid,
  Panel,
  Col,
  Button,
  Glyphicon
} from "react-bootstrap";
import { connect } from "react-redux";
import Beard from "./Beard";
import services from "../service";

const mapStateToProps = state => ({
  dwarves: state.dwarves
});
const mapDispatchToProps = dispatch => ({
  removeDwarf: id => dispatch({ type: "DWARF_REMOVE", payload: id }),
  getDwarves: payload =>
    services.dwarves
      .all()
      .then(d => dispatch({ type: "DWARF_LOAD", payload: d }))
});

const Spark = ({ dwarves, removeDwarf, getDwarves }) => {
  return (
    <Jumbotron>
      <Grid>
        {!dwarves.length && (
          <h3> NO love for you. Your gonna die alone dwarf !!! </h3>
        )}
        {dwarves.map(d => (
          <Col sm={4}>
            <Panel>
              <Panel.Heading>
                <Panel.Title>
                  <Beard height={20} color={d.beard} />
                  {d.name} the {d.occupation}
                  <Button
                    onClick={() => {
                      removeDwarf(d._id);
                      getDwarves();
                    }}
                    bsSize="xsmall"
                    bsStyle="danger"
                    className="pull-right"
                  >
                    <Glyphicon glyph="remove" />
                  </Button>
                </Panel.Title>
              </Panel.Heading>
              <Panel.Body>
                id: {d._id}
                <br />
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
};
export default connect(mapStateToProps, mapDispatchToProps)(Spark);
