import angular from 'angular';
import Board from 'angular-minesweeper/components/board/board';
import Spot from 'angular-minesweeper/components/board/spot/spot';
import Timer from 'angular-minesweeper/components/board/timer/timer';
import Bombs from 'angular-minesweeper/components/board/bombs/bombs';
import NewGameButton from 'angular-minesweeper/components/board/new-game-button/new-game-button';

export default angular.module('ngReact.board', [])
  .directive('board', Board)
  .directive('spot', Spot)
  .directive('timer', Timer)
  .directive('bombs', Bombs)
  .directive('newGameButton', NewGameButton);


