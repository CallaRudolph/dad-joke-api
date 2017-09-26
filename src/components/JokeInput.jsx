import React from "react";
import { fetchJoke } from "./../actions";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";

class JokeInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let { _word } = this.refs;
    console.log(_word.value);
    if (!_word.value.trim()) {
      return;
    }
    this.props.dispatch(fetchJoke(_word.value.trim()));
    _word.value = "";
  }

  render() {
    var formStyle = {
      color: "black"
    }
    return (
      <div>
        <form style={formStyle} onSubmit={this.handleSubmit}>
          <input placeholder="What can I say?" ref="_word"></input>
          <p></p>
          <Button bsStyle="info">I am a button.</Button>
        </form>
      </div>
    );
  }
}

export default connect()(JokeInput);
