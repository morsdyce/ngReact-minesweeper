'use strict';

import SPOT_TYPES from 'common/spot/spot-types.constants';
import _ from 'lodash';

export default class Spot {
  constructor(game, row, column) {
    this.game       = game;
    this.isRevealed = false;
    this.isFlagged  = false;
    this.content    = SPOT_TYPES.EMPTY;
    this.position   = {
      row,
      column
    };
    this.images = {
      covered: require('common/assets/images/covered.png'),
      flagged: require('common/assets/images/flag-mine.png')
    };

    this.loadImages();
  }

  static get TYPES() {
    return SPOT_TYPES;
  }

  loadImages() {
    _.each(Spot.TYPES, (spotType) => {
      let image = Spot.TYPES[spotType.type].image;
      this.images[spotType.type] = require(`common/assets/images/${image}`);
    });
  }

  revealSpot() {
    this.isRevealed = true;

    if (this.content === Spot.TYPES.EMPTY) {
      this.game.checkSpots(this);
    }

    if (this.content === Spot.TYPES.MINE) {
      alert('you lose');
    } else if (this.game.hasWon()) {
      alert('YOU WIN!');
    }
  }

  flagSpot() {
    console.log('flagged the spot');
    this.isFlagged = true;
  }

  getAbove() {
    if (this.position.row > 0) {
      return {
        row: this.position.row - 1,
        column: this.position.column
      };
    }

    return null;
  }

  getAboveRight() {
    if (this.position.row > 0 && this.position.column < this.game.size - 1) {
      return {
        row: this.position.row - 1,
        column: this.position.column + 1
      };
    }

    return null;
  }

  getAboveLeft() {
    if (this.position.row > 0 && this.position.column > 0) {
      return {
        row: this.position.row - 1,
        column: this.position.column - 1
      };
    }

    return null;
  }

  getRight() {
    if (this.position.column < this.game.size - 1) {
      return {
        row: this.position.row,
        column: this.position.column + 1
      };
    }

    return null;
  }

  getLeft() {
    if (this.position.column > 0) {
      return {
        row: this.position.row,
        column: this.position.column - 1
      };
    }

    return null;
  }

  getBelow() {
    if (this.position.row < this.game.size - 1) {
      return {
        row: this.position.row + 1,
        column: this.position.column
      };
    }

    return null;
  }

  getBelowRight() {
    if (this.position.row < this.game.size - 1 && this.position.column < this.game.size - 1) {
      return {
        row: this.position.row + 1,
        column: this.position.column + 1
      };
    }

    return null;
  }

  getBelowLeft() {
    if (this.position.row < this.game.size - 1 && this.position.column > 0) {
      return {
        row: this.position.row + 1,
        column: this.position.column - 1
      };
    }

    return null;
  }


};