import React from "react";
import JokeInput from "./JokeInput";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const JokeDisplay = ({ dispatch, joke }) => {
  let formAreaContent = null;
  if (joke.length === 0) {
    formAreaContent =
    <div>
      <h4>You'll be laughing shortly...</h4>
    </div>
  } else {
    formAreaContent =
    <div>
      <h1>"{joke}"</h1>
    </div>
  }

  return (
    <div>
      <br/>
      <JokeInput/>
      <br/>
      {formAreaContent}
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
