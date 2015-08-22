import template from 'angular-minesweeper/components/board/spot/spot.html';

export default function Spot() {
  return {
    restrict: 'E',
    scope: {
      images: '=',
      type: '=',
      isRevealed: '=',
      isFlagged: '='
    },
    template
  };
}