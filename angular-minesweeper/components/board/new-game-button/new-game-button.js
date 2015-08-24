import template from 'angular-minesweeper/components/board/new-game-button/new-game-button.html';

export default function NewGameButton() {
  return {
    restrict: 'E',
    template,
    scope: true,
    controller: NewGameButtonController,
    controllerAs: 'NewGameButton',
    bindToController: {
      newGame: '&',
      image: '='
    }
  };
}

class NewGameButtonController {
  constructor() {
    this.image = this.image || require('common/assets/images/newgame.jpg');
    this.gameFn = this.newGame();
  }

  startNewGame() {
    this.gameFn();
  }
}
