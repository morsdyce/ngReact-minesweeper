import React from 'react';
import GameActions from 'react-minesweeper/actions/game-actions';
import GameConstants from 'react-minesweeper/constants/game.constants';
import Spot from 'react-minesweeper/components/board/spot/spot.jsx';
import Timer from 'react-minesweeper/components/board/timer/timer.jsx';
import BombsCount from 'react-minesweeper/components/board/bombs-count/bombs-count.jsx';
import NewGameButton from 'react-minesweeper/components/board/new-game-button/new-game-button.jsx';
import _ from 'lodash';

export default React.createClass({

  propTypes() {
    return {
      minefield: React.PropTypes.object.isRequired
    };
  },

  renderCells(row) {
    return row.spots.map((spot) => {
      return (
        <td key={spot.position.column}>
          <Spot spot={ spot }/>
        </td>
      );
    });
  },

  renderRows() {
    return this.props.minefield.rows.map((row, index) => {
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
        <header>
          <Timer />
          <NewGameButton newGameFn={ GameActions.startNewGame }/>
          <BombsCount />
        </header>

        <table className="minefield">
          { this.renderRows() }
        </table>
      </div>
    )
  }

});
