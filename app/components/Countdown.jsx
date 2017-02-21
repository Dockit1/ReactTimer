const React = require('react');
const Clock = require('Clock');
const CountdownForm = require('CountdownForm');

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      countdownStatus: 'stopped'
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.countdownStatus != prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        default:
          break;
      }
    }
  }

  startTimer() {
    this.timer = setInterval(() => {
      const newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
    }, 1000);
  }

  stopTimer() {
    this.setState({
      countdownStatus: 'stopped'
    });
  }

  pauseTimer() {
    this.timer = setInterval(() => {
      this.setState({
        countdownStatus: 'paused'
      })
    }, 0);
  }

  handleSetCountdown(seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  }

  render() {
    const {count} = this.state;
    return (
      <div>
        <Clock totalSeconds={count} />
        <CountdownForm onSetCountdown={(seconds) => {
          this.handleSetCountdown(seconds)
        }} />
      </div>
    );
  }
}

module.exports = Countdown;