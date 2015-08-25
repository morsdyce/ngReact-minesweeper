import React from 'react';
import GameActions from 'react-minesweeper/actions/game-actions';
import GameConstants from 'react-minesweeper/constants/game.constants';
import GameStore from 'react-minesweeper/stores/game-store';

export default React.createClass({

  propTypes() {
    return {
      spot: React.PropTypes.any.isRequired
    };
  },

  componentWillReceiveProps(nextProps) {
    this.setState({
      isRevealed: nextProps.spot.isRevealed,
      isFlagged: nextProps.spot.isFlagged,
      type: nextProps.spot.content.type
    });
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

    if (this.props.spot.isRevealed) {
      image = this.props.spot.images[this.state.type];
    }

    if (!this.props.spot.isRevealed && !this.props.spot.isFlagged) {
      image = this.props.spot.images['covered'];
    }

    if (!this.props.spot.isRevealed && this.props.spot.isFlagged) {
      image = this.props.spot.images['flagged'];
    }

    return (
     <img src={ image }
          onClick={ this.revealSpot }
          onContextMenu={ this.flagSpot } />
    );
  }

});
