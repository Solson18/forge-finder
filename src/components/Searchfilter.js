import React from "react";
import { connect } from "react-redux";
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

import { withRouter } from "react-router-dom";

const mapStateToProps = state => ({
  beards: state.beards
});


const mapDispatchToProps = dispatch => ({
  filterDwarves: color => dispatch({ type: "FILTER_COLOR", payload: color })
});

const SearchFilter = ({ filterDwarves, beards }) => (
  <div>
    <h3>Choose your color:</h3>
    <br/>
    {/* <button onClick={() => filterDwarves("red")}> Red Beards only</button>
    <button onClick={() => filterDwarves("green")}> Green Beards only</button>
    <button onClick={() => filterDwarves("blue")}> Blue Beards only</button>
    <button onClick={() => filterDwarves("black")}> Black Beards only</button>
    <button onClick={() => filterDwarves("gold")}> Gold Beards only</button>
    <button onClick={() => filterDwarves("white")}> White Beards only</button>
    <button onClick={() => filterDwarves("maroon")}> Maroon Beards only</button>
    <button onClick={() => filterDwarves("brown")}> Brown Beards only</button>
    <button onClick={() => filterDwarves("purple")}> Purple Beards only</button> */}
    {/* <button onClick={() => filterDwarves("")}>All Beards</button> */}
    {beards.map(b => (
    <Radio
                     name="beardGroup"
                  inline
                  required
                  key={b}
                  onChange={() => {
                    filterDwarves(b)}} >
                  <Beard height={50} color={b} />
                </Radio>
              ))}


  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(SearchFilter);
