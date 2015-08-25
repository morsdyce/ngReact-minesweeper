import template from 'angular-minesweeper/components/board/title-bar/title-bar.html';

export default function TitleBar() {
  return {
    restrict: 'E',
    template,
    controller: TitleBarController,
    controllerAs: 'TitleBar',
    bindToController: true
  };
}

class TitleBarController {

  constructor() {
    this.image = require('common/assets/images/title-buttons.png');
    this.icon = require('common/assets/images/icon.png');
  }

}