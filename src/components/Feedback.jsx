import React, { Component } from 'react';

class Feedback extends Component {
  // countTotalFeedback = () => {
  //   const { good, neutral, bad } = this.state;
  //   const total = good + neutral + bad;
  //   return total;
  // };

  // countPositiveFeedbackPercentage = () => {
  //   const { good, neutral, bad } = this.state;
  //   const total = (good / (good + neutral + bad)) * 100;
  //   return Math.round(total);
  // };

  // onLeaveFeedback = event => {
  //   const nameBtn = event.target.name;
  //   this.setState(prevState => ({
  //     [nameBtn]: prevState.nameBtn + 1,
  //   }));
  // };

  render() {
    return (
      <div>
        {/* <h1>Please leave feedback</h1>
        <div>
          <button type="button" onClick={this.onLeaveFeedback}>
            good
          </button>
          <button type="button" onClick={this.onLeaveFeedback}>
            neutral
          </button>
          <button type="button" onClick={this.onLeaveFeedback}>
            bad
          </button>
        </div>
        <div>
          <p>Statistics</p>
          <ul>
            <li>
              <p>Good: {good}</p>
            </li>
            <li>
              <p>Neutral: {neutral}</p>
            </li>
            <li>
              <p>Bad: {bad}</p>
            </li>
            <li>
              <p>Total:{total} </p>
            </li>
            <li>
              <p>Positive feedback: {positivePercentage}%</p>
            </li>
          </ul>
        </div> */}
      </div>
    );
  }
}

export default Feedback;
