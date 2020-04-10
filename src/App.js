import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    question: "",
    answer: [],
  };

  async componentDidMount() {
    const { question } = this.state;
    const response = await fetch(
      `https://8ball.delegator.com/magic/JSON/'${question}'`
    );
    const answerBall = await response.json();
    console.log(answerBall);
    this.setState({
      userAnswer: answerBall.magic.answer,
    });
  }
  render() {
    const { userAnswer } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <h1>Magic 8 ball</h1>
            <p>(May the odds be ever in your favor)</p>
            <input
              type="text"
              value={this.state.textInput}
              placeholder="user name"
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Submit</button>
          <p>Answer: {userAnswer}</p>
        </form>
      </div>
    );
  }
}
export default App;
