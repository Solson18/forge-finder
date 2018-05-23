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

const Profile = props => {
  let submitForm = event => {
    event.preventDefault();
  };

  let clans = [
    "boldershoulder",
    "Bronzebottom",
    "Hardhammer",
    "Brawnanvil",
    "Muffinhead",
    "Hammerstrikers",
    "StoutHammer",
    "All Other Bastards"
  ];

  let occupation = [
    "Gem Smithing",
    "Metal Smithing",
    "Weapon Smithing",
    "Child Smithing",
    "Warrior",
    "??Wizard?",
    "Brewer",
    "Dragon Rider",
    "other"
  ];

  let beards = ["red", "white", "Black", "Grey", "purple", "blue"];
  return (
    <Jumbotron>
      <Grid>
        <Form horizontal onSubmit={event => submitForm(event)}>
          <FormGroup>
            <Col smOffSet={2} sm={6}>
              <h3> Your Profile</h3>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col sm={2} componentClass={ControlLabel}>
              Name
            </Col>
            <Col sm={6}>
              <FormControl type="text" required />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col sm={2} componentClass={ControlLabel}>
              Height
            </Col>
            <Col sm={6}>
              <FormControl type="text" required />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col sm={2} componentClass={ControlLabel}>
              Clan
            </Col>
            <Col sm={6}>
              <FormControl componentClass="select" defaultValue={-1}>
                <option value={-1} disabled="disabled">
                  --slect--
                </option>
                {clans.map(c => <option value={c}>{c} </option>)}
              </FormControl>>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={2} componentClass={ControlLabel}>
              Occupation
            </Col>
            <Col sm={6}>
              <FormControl componentClass="select" defaultValue={-1}>
                <option value={-1} disabled="disabled">
                  --slect--
                </option>
                {occupation.map(c => <option value={c}>{c} </option>)}
              </FormControl>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col sm={2} componentClass={ControlLabel}>
              Beard Color
            </Col>
            <Col sm={6}>
              {beards.map(b => (
                <Radio name="beardGroup" inline required>
                  <Beard height={50} color={b} />
                </Radio>
              ))}
            </Col>

            <Col smOffset={2} sm={6}>
              <Button type="submit">Set in Stone</Button>
            </Col>
          </FormGroup>
        </Form>
      </Grid>
    </Jumbotron>
  );
};

export default Profile;
