import React from "react";
import JokeInput from "./JokeInput";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const JokeDisplay = ({ dispatch, joke }) => {
  console.log(joke);
  let formAreaContent = null;
  if (joke === undefined) {
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
  joke: PropTypes.array,
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  console.log(state);
  const joke = state;
  return {
    joke: joke
  };
};

export default connect(mapStateToProps)(JokeDisplay);
