import React from "react";
import {
  Jumbotron,
  Grid,
  Form,
  FormGroup,
  Col,
  FormControl,
  ControlLabel,
  Radio,
  Button
} from "react-bootstrap";
import Beard from "./Beard";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const mapStateToProps = state => ({
  clans: state.clans,
  occupations: state.occupations,
  beards: state.beards
});

const mapDispatchToProps = dispatch => ({
  addDwarf: dwf => dispatch({ type: "DWARF_ADD", payload: dwf })
});

const Profile = ({ addDwarf, history, clans, occupations, beards }) => {
  let name;
  let height;
  let clan;
  let occupation;
  let beardColor;

  let submitForm = event => {
    event.preventDefault();
    if (clan.value === "-1" || occupation.value === "-1") return;
    console.log(name.value);
    console.log(height.value);
    console.log(clan.value);
    console.log(occupation.value);
    console.log(beardColor);
    addDwarf({
      name: name.value,
      height: height.value,
      clan: clan.value,
      occupation: occupation.value,
      beard: beardColor
    });
    history.push("/spark");
  };

  clans.sort();
  occupations.sort();

  return (
    <Jumbotron>
      <Grid>
        <Form horizontal onSubmit={event => submitForm(event)}>
          <FormGroup>
            <Col smOffset={2} sm={6}>
              <h3>Your Profile</h3>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col sm={2} componentClass={ControlLabel}>
              Name
            </Col>
            <Col sm={6}>
              <FormControl
                type="text"
                required
                inputRef={ref => {
                  name = ref;
                }}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col sm={2} componentClass={ControlLabel}>
              Height
            </Col>
            <Col sm={6}>
              <FormControl
                type="text"
                required
                inputRef={ref => {
                  height = ref;
                }}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col sm={2} componentClass={ControlLabel}>
              Clan
            </Col>
            <Col sm={6}>
              <FormControl
                componentClass="select"
                defaultValue={-1}
                inputRef={ref => {
                  clan = ref;
                }}
              >
                <option value={-1} disabled="disabled">
                  --select--
                </option>
                {clans.map(c => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </FormControl>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col sm={2} componentClass={ControlLabel}>
              Occupation
            </Col>
            <Col sm={6}>
              <FormControl
                componentClass="select"
                defaultValue={-1}
                inputRef={ref => {
                  occupation = ref;
                }}
              >
                <option value={-1} disabled="disabled">
                  --select--
                </option>
                {occupations.map(c => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </FormControl>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col sm={2} componentClass={ControlLabel}>
              Beard Color
            </Col>
            <Col sm={6}>
              {beards.map(b => (
                <Radio
                  name="beardGroup"
                  inline
                  required
                  key={b}
                  onChange={() => {
                    beardColor = b;
                  }}
                >
                  <Beard height={50} color={b} />
                </Radio>
              ))}
            </Col>
          </FormGroup>
          <FormGroup>
            <Col smOffset={2} sm={6}>
              <Button bsStyle="primary" type="submit">
                Set In Stone
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </Grid>
    </Jumbotron>
  );
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Profile)
);
