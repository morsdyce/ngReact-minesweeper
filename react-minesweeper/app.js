import React from 'react';
import GameStore from 'react-minesweeper/stores/game-store';
import Board from 'react-minesweeper/components/board/board';

export class App extends React.Component {
  constructor() {
    super();

    this.state = {
      minefield: GameStore.getMinefield()
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
      minefield: GameStore.getMinefield()
    });

    if (GameStore.hasWon()) {
      alert('You Win!');
    } else if (GameStore.hasLost()) {
      alert('You Lost!');
    }
  }

  render() {
    return (
      <Board minefield={ this.state.minefield }/>
    );
  }
}

export default App;
