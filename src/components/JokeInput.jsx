import React from "react";
import { connect } from "react-redux";

class JokeInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let { _word } = this.refs;
    if (!_word.value.trim()) {
      return;
    }
    this.props.dispatch(fetchJoke(_word.value.trim()));
    _word.value = "";
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Type in a word." ref="_word"></input>
          <button>I am a button.</button>
        </form>
      </div>
    );
  }
}

export default connect()(JokeInput);
