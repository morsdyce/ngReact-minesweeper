import React from 'react';
import GameActions from 'react-minesweeper/actions/game-actions';
import GameConstants from 'react-minesweeper/constants/game.constants';
import Cell from 'react-minesweeper/components/board/cell/cell.jsx';
import Timer from 'react-minesweeper/components/board/timer/timer.jsx';
import BombsCount from 'react-minesweeper/components/board/bombs-count/bombs-count.jsx';
import NewGameButton from 'react-minesweeper/components/board/new-game-button/new-game-button.jsx';
import Header from 'react-minesweeper/components/board/header/header.jsx';
import TitleBar from 'react-minesweeper/components/board/title-bar/title-bar.jsx';
import _ from 'lodash';

class Board extends React.Component {

  renderCells(row) {
    return row.spots.map((spot) => {
      return (
        <td key={spot.position.column}>
          <Cell spot={ spot }/>
        </td>
      );
    });
  }

  renderRows() {
    return this.props.minefield.rows.map((row, index) => {
      return (
        <tr key={ index }>
          { this.renderCells(row) }
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="window">
        <TitleBar />

        <div className="window-inner">
          <Header>
            <BombsCount />
            <NewGameButton newGameFn={ GameActions.startNewGame }/>
            <Timer />
          </Header>

          <div className="minefield-wrapper">
            <table className="minefield">
              <tbody>
              { this.renderRows() }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

Board.propTypes = {
  minefield: React.PropTypes.object.isRequired
};

export default Board;
