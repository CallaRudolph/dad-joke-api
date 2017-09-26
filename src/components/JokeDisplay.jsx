import React from "react";
import JokeInput from "./JokeInput";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const JokeDisplay = ({ dispatch, joke }) => {
  return (
    <div>
      <br/>
      <JokeInput/>
      <br/>
      <h3><em>"{joke.joke}"</em></h3>
    </div>
  );
}

JokeDisplay.propTypes = {
  joke: PropTypes.object
};

const mapStateToProps = state => {
  console.log(state);
  const joke = state;
  return {
    joke: joke
  };
};

export default connect(mapStateToProps)(JokeDisplay);
