import template from 'angular-minesweeper/components/board/bombs/bombs.html';

export default function Bombs() {
  return {
    restrict: 'E',
    template,
    scope: {
      amount: '='
    }
  };
}