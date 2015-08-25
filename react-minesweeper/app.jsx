import React from 'react';
import GameStore from 'react-minesweeper/stores/game-store';
import Board from 'react-minesweeper/components/board/board.jsx';

export default React.createClass({

  getInitialState() {
    return {
      minefield: GameStore.getMinefield()
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
      minefield: GameStore.getMinefield()
    });

    if (GameStore.hasWon()) {
      alert('You Win!');
    } else if (GameStore.hasLost()) {
      alert('You Lost!');
    }
  },

  render() {
    return (
      <Board minefield={ this.state.minefield }/>
    );
  }

});
