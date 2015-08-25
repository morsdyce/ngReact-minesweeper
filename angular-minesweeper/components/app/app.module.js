import angular from 'angular';
import App from 'angular-minesweeper/components/app/app';

export default angular.module('ngReact.app', [])
  .directive('app', App);