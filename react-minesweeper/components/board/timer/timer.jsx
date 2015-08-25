import React from 'react';
import GameStore from 'react-minesweeper/stores/game-store';

export default React.createClass({

  getInitialState() {
    return {
      time: 0
    };
  },

  componentDidMount() {
    this._startTimer();
    GameStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    GameStore.removeChangeListener(this._onChange);
  },

  _onChange() {
    if (GameStore.hasWon() || GameStore.hasLost()) {
      this._stopTimer();
    }
  },

  _startTimer() {
    // we save the interval id on the component instance and not the state
    // because we do not want the component to re render when the interval is set
    this.intervalId = setInterval(() => this.setState({
      time: this.state.time + 1
    }), 1000);
  },

  _stopTimer() {
    clearInterval(this.intervalId);
  },

  _resetTimer() {
    this.setState({
      time: 0
    });
  },

  render() {
    return (
      <div className="timer number-window">
      <span>
        { this.state.time }
      </span>
      </div>
    );
  }

});
