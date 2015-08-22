import template from 'angular-minesweeper/components/board/bombs/bombs.html';

export default function Bombs() {
  return {
    restrict: 'E',
    template,
    scope: true,
    controller: BombsController,
    controllerAs: 'Bombs',
    bindToController: {
      amount: '='
    }
  };
}

class BombsController {
  constructor() {
    console.log(this);
  }
}