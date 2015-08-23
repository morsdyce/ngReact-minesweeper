import React from 'react';
import GameStore from 'react-minesweeper/stores/game-store';
import GameActions from 'react-minesweeper/actions/game-actions';
import GameConstants from 'react-minesweeper/constants/game.constants';
import Spot from 'react-minesweeper/components/board/spot/spot.jsx';
import Timer from 'react-minesweeper/components/board/timer/timer.jsx';
import BombsCount from 'react-minesweeper/components/board/bombs-count/bombs-count.jsx';
import NewGameButton from 'react-minesweeper/components/board/new-game-button/new-game-button.jsx';
import _ from 'lodash';

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

  _onChange({ type, position }) {

    if (type === GameConstants.REVEAL_SPOT || type === GameConstants.FLAG_SPOT) {

      // get a reference to a specific spot and mark it for update
      this.refs[`spot${position.row}-${position.column}`].update(type);

      if (GameStore.hasWon()) {
        alert('You Win!');
      } else if (GameStore.hasLost()) {
        alert('You Lost!');
      }
    } else {
      _.each(this.refs, (ref) => ref.update(type) );
    }
  },

  renderCells(row) {
    return row.spots.map((spot) => {
      let ref = `spot${spot.position.row}-${spot.position.column}`;

      return (
        <td key={spot.position.column}>
          <Spot spot={ spot } images={ spot.images } ref={ ref }/>
        </td>
      );
    });
  },

  renderRows() {
    return this.state.minefield.rows.map((row, index) => {
      return (
        <tr key={ index }>
          { this.renderCells(row) }
        </tr>
      );
    });
  },

  render() {
    return (
      <div>
        <Timer />
        <NewGameButton newGameFn={ GameActions.startNewGame }/>
        <BombsCount />
        <table className="minefield">
          { this.renderRows() }
        </table>
      </div>
    )
  }

});
