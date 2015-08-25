import React from 'react';

export default React.createClass({

  displayName: 'TitleBar',

  render() {
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
  }

});