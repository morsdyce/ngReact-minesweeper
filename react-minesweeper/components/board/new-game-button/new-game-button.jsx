import React from 'react';

const defaultImage = require('common/assets/images/newgame.jpg');

export const NewGameButton = ({ image = defaultImage, newGameFn }) => (
  <div className="new-game-button">
    <img src={image} onClick={ newGameFn } />
  </div>
);

NewGameButton.propTypes = {
  image: React.PropTypes.string,
  newGameFn: React.PropTypes.func
};

export default NewGameButton;
