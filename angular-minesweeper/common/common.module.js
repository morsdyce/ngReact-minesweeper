import angular from 'angular';
import MsRightClick from 'angular-minesweeper/common/msRightClick';

export default angular.module('ngReact.common', [])
  .directive('msRightClick', MsRightClick);