import React from 'react';

export default React.createClass({

  displayName: 'NewGameButton',

  propTypes() {
    return {
      image: React.PropTypes.string,
      newGameFn: React.PropsTypes.func.isRequired
    }
  },

  getDefaultProps() {
    return {
      image: require('common/assets/images/newgame.jpg')
    }
  },

  render() {
    return (
      <div className="new-game-button">
        <img src={this.props.image} onClick={ this.props.newGameFn } />
      </div>
    );
  }

});
