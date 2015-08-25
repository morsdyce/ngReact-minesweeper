import 'common/assets/stylesheets/minefield.css';

import App from 'angular-minesweeper/components/app/app.module';
import Common from 'angular-minesweeper/common/common.module';
import Board from 'angular-minesweeper/components/board/board.module';

export default angular.module('ngReact', [
  Common.name,
  Board.name,
  App.name
]);