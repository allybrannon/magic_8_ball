import React, { Component } from "react";

class EightBall extends Component {
  state = {
    answer: [],
  };

  handleChange = (event) => {
    this.setState({
      question: event.target.value,
    });
  };

  async componentDidMount() {
    const { question } = this.state;
    const response = await fetch(
      `https://8ball.delegator.com/magic/JSON/'${question}'`
    );
    const magicBall = await response.json();
    this.setState({
      userAnswer: magicBall.magic.answer,
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
              placeholder="ask a question"
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

export default EightBall;
