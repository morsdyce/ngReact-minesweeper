import template from 'angular-minesweeper/components/board/cell/cell.html';
import Spot from 'common/spot/spot';

export default function Cell() {
  return {
    restrict: 'E',
    template,
    scope: true,
    controller: CellController,
    controllerAs: 'Cell',
    bindToController: {
      spot: '='
    }
  };
}

class CellController {

  constructor() {
    this._loadImages();
  }

  _loadImages() {
    this.images = {
      covered: require('common/assets/images/covered.png'),
      flagged: require('common/assets/images/flag-mine.png')
    };

    _.each(Spot.TYPES, (spotType) => {
      let image = Spot.TYPES[spotType.type].image;
      this.images[spotType.type] = require(`common/assets/images/${image}`);
    });
  }
}