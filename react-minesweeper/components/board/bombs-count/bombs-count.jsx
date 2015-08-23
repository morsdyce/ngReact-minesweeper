import React from 'react';
import GameStore from 'react-minesweeper/stores/game-store';

export default React.createClass({

  getInitialState() {
    return {
      remainingBombs: GameStore.getRemainingBombs()
    }
  },

  componentDidMount: function () {
    GameStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    GameStore.removeChangeListener(this._onChange);
  },

  _onChange() {
    this.setState({
      remainingBombs: GameStore.getRemainingBombs()
    });
  },

  render() {
    return (
      <span className="bombsCount">
        Bombs: { this.state.remainingBombs }
      </span>
    )
  }
});
