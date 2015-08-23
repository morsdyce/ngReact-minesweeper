import template from 'angular-minesweeper/components/board/new-game-button/new-game-button.html';

export default function NewGameButton() {
  return {
    restrict: 'E',
    template,
    controller: NewGameButtonController,
    controllerAs: 'NewGameButton',
    bindToController: true
  };
}

class NewGameButtonController {
  constructor() {
    this.image = require('common/assets/images/newgame.jpg');
  }
}