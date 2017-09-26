import React from "react";
import Header from "./Header";
import JokeDisplay from "./JokeDisplay";
import Background from "./../images/background.jpg";

function App(props){
  var backgroundStyle = {
    backgroundImage: "url(" + Background + ")",
    color: "pink"
  }
  return (
    <div style={backgroundStyle} className="container">
      <Header/>
      <JokeDisplay/>
    </div>
  );
}

export default App;
