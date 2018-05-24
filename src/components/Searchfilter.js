import React from "react";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => ({
  filterDwarves: color => dispatch({ type: "FILTER_COLOR", payload: color })
});

const SearchFilter = ({ filterDwarves }) => (
  <div>
    <button onClick={() => filterDwarves("gold")}> Gold Beards only</button>
    <button onClick={() => filterDwarves("")}>All Beards</button>
  </div>
);

export default connect(null, mapDispatchToProps)(SearchFilter);
