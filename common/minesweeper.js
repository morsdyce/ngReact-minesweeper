'use strict';

import Spot from 'common/spot/spot';
import _ from 'lodash';

export default class MineSweeper {
  constructor(size = 9) {
    this.size      = size;
    this.isBlown   = false;
    this.minefield = {
      rows: []
    };

    this._createRows();
    this._placeMines();
    this._calculateAllNumbers();
  }

  _createRows() {
    for (let i = 0; i < this.size; i++) {
      let row   = {};
      row.spots = [];

      for (let j = 0; j < this.size; j++) {
        row.spots.push(new Spot(this, i, j));
      }

      this.minefield.rows.push(row);
    }
  }

  _placeMines() {
    for (let i = 0; i <= this.size; i++) {
      this._placeRandomMine();
    }
  }

  _placeRandomMine() {
    let row    = Math.round(Math.random() * 8);
    let column = Math.round(Math.random() * 8);

    let spot     = this._getSpot(row, column);
    spot.content = Spot.TYPES.MINE;
  }

  _getSpot(row, column) {
    return this.minefield.rows[row].spots[column];
  }

  // check cells in all directions
  // if a cell is a number or empty reveal the cell
  checkSpots(spot) {
    [
      spot.getAbove(),
      spot.getAboveRight(),
      spot.getAboveLeft(),
      spot.getRight(),
      spot.getLeft(),
      spot.getBelow(),
      spot.getBelowRight(),
      spot.getBelowLeft()
    ].filter((checkingSpot) => checkingSpot)
      .map(({ row, column }) => this._getSpot(row, column))
      .filter((checkingSpot) => !checkingSpot.isRevealed)
      .filter((checkingSpot) => !checkingSpot.isFlagged)
      .filter((checkingSpot) => checkingSpot.content !== Spot.TYPES.MINE)
      .forEach((checkingSpot) => checkingSpot.revealSpot());
  }

  _calculateNumber(row, column) {
    let spot = this._getSpot(row, column);

    // if this spot contains a mine then we can't place a number here
    if (spot.content == Spot.TYPES.MINE) {
      return;
    }

    let mineCount = [
      spot.getAbove(),
      spot.getAboveRight(),
      spot.getAboveLeft(),
      spot.getRight(),
      spot.getLeft(),
      spot.getBelow(),
      spot.getBelowRight(),
      spot.getBelowLeft()
    ].filter((checkingSpot) => checkingSpot)
      .map(({ row, column }) => this._getSpot(row, column))
      .filter((checkingSpot) => checkingSpot.content === Spot.TYPES.MINE)
      .length;

    if (mineCount > 0) {
      spot.content = Spot.TYPES[`NUMBER${mineCount}`];
    }
  }

  _calculateAllNumbers() {
    for (var y = 0; y < this.size; y++) {
      for (var x = 0; x < this.size; x++) {
        this._calculateNumber(x, y);
      }
    }
  }

  hasWon() {
    let remainingSpots = _.flatten(this.minefield.rows.map((row) => row.spots))
      .filter((spot) => !spot.isRevealed)
      .filter((spot) => !spot.isFlagged)
      .filter((spot) => spot.content !== Spot.TYPES.MINE)
      .length;

    return remainingSpots === 0;
  }

  hasLost() {
    return this.isBlown;
  }

  remainingBombs() {
    let remainingBombs = _.flatten(this.minefield.rows.map((row) => row.spots))
      .filter((spot) => !spot.isRevealed)
      .filter((spot) => !spot.isFlagged)
      .filter((spot) => spot.content === Spot.TYPES.MINE)
      .length;

    return remainingBombs;
  }
}