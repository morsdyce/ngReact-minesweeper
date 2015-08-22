import MineSweeper from 'common/minesweeper';
import template from 'angular-minesweeper/components/board/board.html';

export default function Board() {
  return {
    restrict: 'E',
    template,
    controller: BoardController,
    controllerAs: 'Board',
    bindToController: true
  };
}

class BoardController {
  constructor() {
    this.game = new MineSweeper();
  }

  revealSpot(spot) {
    spot.revealSpot();
  }

  flagSpot(spot) {
    spot.flagSpot();
  }

  remainingBombs() {
    return this.game.remainingBombs();
  }
}