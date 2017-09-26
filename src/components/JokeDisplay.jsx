import React from "react";
import JokeInput from "./JokeInput";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const JokeDisplay = ({ dispatch, joke }) => {
  // const { response } = joke;
  return (
    <div>
      <JokeInput/>
      <h3>Yr joke will be here shortly.</h3>
      {joke}
    </div>
  );
}

JokeDisplay.propTypes = {
  joke: PropTypes.array
};

const mapStateToProps = state => {
  console.log(state);
  const joke = state;
  return {
    joke: joke
  };
};

export default connect(mapStateToProps)(JokeDisplay);
