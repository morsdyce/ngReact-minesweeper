import React from 'react';

export default React.createClass({

  displayName: 'Header',

  render() {
    return (
      <div className="header">
        {this.props.children}
      </div>
    );
  }

});