import React, { Component } from 'react';
import Feedback from './components/Feedback';
import Statistics from './components/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = (good / (good + neutral + bad)) * 100;
    return Math.round(total);
  };

  onLeaveFeedback = event => {
    const nameBtn = event.target.name;
    this.setState(prevState => ({
      [nameBtn]: prevState.nameBtn + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <div className="App">
        <Feedback />,
        <Statistics />
      </div>
    );
  }
}

export default App;
