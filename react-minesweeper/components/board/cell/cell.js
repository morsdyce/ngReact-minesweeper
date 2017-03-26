import React from 'react';
import GameActions from 'react-minesweeper/actions/game-actions';
import GameConstants from 'react-minesweeper/constants/game.constants';
import GameStore from 'react-minesweeper/stores/game-store';
import Spot from 'common/spot/spot';

export class Cell extends React.Component {
  constructor() {
    super();

    this.state = this.getInitialState();

    this.revealSpot = this.revealSpot.bind(this);
    this.flagSpot = this.flagSpot.bind(this);
  }

  getInitialState() {
    let images = {
      covered: require('common/assets/images/covered.png'),
      flagged: require('common/assets/images/flag-mine.png')
    };

    _.each(Spot.TYPES, (spotType) => {
      let image = Spot.TYPES[spotType.type].image;
      images[spotType.type] = require(`common/assets/images/${image}`);
    });

    return {
      images
    };
  }

  revealSpot() {
    GameActions.revealSpot(this.props.spot.position);
  }

  flagSpot(e) {
    e.preventDefault();

    GameActions.flagSpot(this.props.spot.position);
  }

  render() {
    let image;

    if (this.props.spot.isRevealed) {
      image = this.state.images[this.props.spot.content.type];
    }

    if (!this.props.spot.isRevealed && !this.props.spot.isFlagged) {
      image = this.state.images['covered'];
    }

    if (!this.props.spot.isRevealed && this.props.spot.isFlagged) {
      image = this.state.images['flagged'];
    }

    return (
      <img src={ image }
           onClick={ this.revealSpot }
           onContextMenu={ this.flagSpot } />
    );
  }
}

Cell.propTypes = {
  spot: React.PropTypes.any.isRequired
};

export default Cell;

