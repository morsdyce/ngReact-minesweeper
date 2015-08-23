import Dispatcher from 'react-minesweeper/dispatcher/dispatcher';
import ActionTypes from 'react-minesweeper/constants/game.constants';

export default {

  revealSpot(position) {
    Dispatcher.dispatch({
      type: ActionTypes.REVEAL_SPOT,
      position
    });
  },

  flagSpot(position) {
    Dispatcher.dispatch({
      type: ActionTypes.FLAG_SPOT,
      position
    });
  },

  startNewGame() {
    Dispatcher.dispatch({
      type: ActionTypes.NEW_GAME
    });
  }

};
