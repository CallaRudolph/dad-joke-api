import React from "react";
import JokeInput from "./JokeInput";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function JokeDisplay(props){
  return (
    <div>
      <JokeInput/>
      <h3>Yr joke will be here shortly.</h3>
    </div>
  );
}

export default JokeDisplay;
