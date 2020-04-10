import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    textInput: "",
  };

  render() {
    return (
      <div className="App">
        <h1>Magic 8 ball</h1>
        <p>(May the odds be ever in your favor)</p>
      </div>
    );
  }
}
export default App;
