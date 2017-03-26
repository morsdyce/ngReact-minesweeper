import React from 'react';

export const TitleBar = () => {
  let image = require('common/assets/images/title-buttons.png');
  let icon = require('common/assets/images/icon.png');

  return (
    <div className="title-bar">
      <div className="app-name">
        <img src={ icon } /> Minesweeper
      </div>
      <div className="window-buttons">
        <img src={ image } />
      </div>
    </div>
  );
};

export default TitleBar;
