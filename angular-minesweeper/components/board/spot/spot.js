import template from 'angular-minesweeper/components/board/spot/spot.html';

export default function Spot() {
  return {
    restrict: 'E',
    template,
    scope: {
      spot: '='
    }
  };
}