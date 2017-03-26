import React from 'react';
import GameStore from 'react-minesweeper/stores/game-store';

export class BombsCount extends React.Component {
  constructor() {
    super();

    this.state = {
      remainingBombs: GameStore.getRemainingBombs()
    };

    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    GameStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    GameStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState({
      remainingBombs: GameStore.getRemainingBombs()
    });
  }

  render() {
    return (
      <div className="bomb-count number-window">
        <span>{ this.state.remainingBombs }</span>
      </div>
    )
  }
}

export default BombsCount;
