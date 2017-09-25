import React from "react";
import Header from "./Header";
import JokeDisplay from "./JokeDisplay";

function App(props){
  return (
    <div className="container">
      <Header/>
      <JokeDisplay/>
    </div>
  );
}

export default App;
