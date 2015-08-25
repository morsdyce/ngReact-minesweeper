import angular from 'angular';
import Board from 'angular-minesweeper/components/board/board';
import Cell from 'angular-minesweeper/components/board/cell/cell';
import Timer from 'angular-minesweeper/components/board/timer/timer';
import Bombs from 'angular-minesweeper/components/board/bombs/bombs';
import NewGameButton from 'angular-minesweeper/components/board/new-game-button/new-game-button';

export default angular.module('ngReact.board', [])
  .directive('board', Board)
  .directive('cell', Cell)
  .directive('timer', Timer)
  .directive('bombs', Bombs)
  .directive('newGameButton', NewGameButton);


