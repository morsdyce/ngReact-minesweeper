import React from 'react';
import GameStore from 'react-minesweeper/stores/game-store';

class Timer extends React.Component {
  constructor() {
    super();

    this.state = {
      time: 0
    };

    this._onChange = this._onChange.bind(this);
    this._startTimer = this._startTimer.bind(this);
    this._stopTimer = this._stopTimer.bind(this);
    this._resetTimer = this._resetTimer.bind(this);
  }

  componentDidMount() {
    this._startTimer();
    GameStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    GameStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    if (GameStore.hasWon() || GameStore.hasLost()) {
      this._stopTimer();
    }
  }

  _startTimer() {
    // we save the interval id on the component instance and not the state
    // because we do not want the component to re render when the interval is set
    this.intervalId = setInterval(() => this.setState({
      time: this.state.time + 1
    }), 1000);
  }

  _stopTimer() {
    clearInterval(this.intervalId);
  }

  _resetTimer() {
    this.setState({
      time: 0
    });
  }

  render() {
    return (
      <div className="timer number-window">
      <span>
        { this.state.time }
      </span>
      </div>
    );
  }
}

export default Timer;
