import assign from 'object-assign';
import EventEmitter from 'eventemitter2';
import Dispatcher from 'react-minesweeper/dispatcher/dispatcher';
import ActionTypes from 'react-minesweeper/constants/game.constants';
import GameActions from 'react-minesweeper/actions/game-actions';
import MineSweeper from 'common/minesweeper';
import Spot from 'common/spot/spot';


let game = new MineSweeper();
const CHANGE_EVENT = 'CHANGE';

function revealSpot({ row, column }) {
  let spot = getSpot(row, column);
  spot.revealSpot();
}

function flagSpot({ row, column }) {
  let spot = getSpot(row, column);
  spot.flagSpot();
}

function getSpot(row, column) {
  return game.minefield.rows[row].spots[column];
}

let GameStore = assign({}, EventEmitter.prototype, {

  getMinefield() {
    return game.minefield;
  },

  getRemainingBombs() {
    return game.remainingBombs();
  },

  hasWon() {
    return game.hasWon();
  },

  hasLost() {
    return game.hasLost();
  },

  emitChange(data) {
    this.emit(CHANGE_EVENT, data);
  },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

GameStore.dispatchToken = Dispatcher.register(function (action) {

  switch (action.type) {
    case ActionTypes.REVEAL_SPOT:
      revealSpot(action.position);
      GameStore.emitChange({ type: action.type, position: action.position });
      break;

    case ActionTypes.FLAG_SPOT:
      flagSpot(action.position);
      GameStore.emitChange({ type: action.type, position: action.position });
      break;

    case ActionTypes.NEW_GAME:
      game = new MineSweeper();
      GameStore.emitChange({ type: action.type });
      break;
  }

});

export default GameStore;
