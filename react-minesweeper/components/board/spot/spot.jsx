import React from 'react';
import GameActions from 'react-minesweeper/actions/game-actions';
import GameConstants from 'react-minesweeper/constants/game.constants';
import GameStore from 'react-minesweeper/stores/game-store';

export default React.createClass({

  propTypes() {
    return {
      spot: React.PropTypes.any.isRequired,
      images: React.PropTypes.any.isRequired
    };
  },

  getInitialState() {
    return {
      isRevealed: this.props.spot.isRevealed,
      isFlagged: this.props.spot.isFlagged,
      type: this.props.spot.content.type
    };
  },

  update(type) {
    let state = {};
    switch (type) {
      case GameConstants.REVEAL_SPOT:
        state.isRevealed = true;
        break;
      case GameConstants.FLAG_SPOT:
        state.isFlagged = true;
        break;
      case GameConstants.NEW_GAME:
        state.isRevealed = false;
        state.isFlagged = false;
        break;
    }

    this.setState(state);
  },

  revealSpot() {
    GameActions.revealSpot(this.props.spot.position);
  },

  flagSpot(e) {
    e.preventDefault();

    GameActions.flagSpot(this.props.spot.position);
  },

  render() {
    let image;

    if (this.state.isRevealed) {
      image = this.props.images[this.state.type];
    }

    if (!this.state.isRevealed && !this.state.isFlagged) {
      image = this.props.images['covered'];
    }

    if (!this.state.isRevealed && this.state.isFlagged) {
      image = this.props.images['flagged'];
    }

    return (
     <img src={ image }
          onClick={ this.revealSpot }
          onContextMenu={ this.flagSpot } />
    );
  }

});
