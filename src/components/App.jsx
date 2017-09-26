import React from "react";
import Header from "./Header";
import JokeDisplay from "./JokeDisplay";
import Background from "./../images/background.jpg";

function App(props){
  var backgroundStyle = {
    backgroundImage: "url(" + Background + ")",
    position: "fixed",
    backgroundSize: "cover",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 9999,
    color: "pink",
    textShadow: "2px 2px blue"
  }
  return (
    <div style={backgroundStyle} className="container">
      <Header/>
      <JokeDisplay/>
    </div>
  );
}

export default App;
