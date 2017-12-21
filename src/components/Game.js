import React from 'react';

import { calculateWinner } from '../utils';
import Board from './Board';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        }
      ],
      xIsNext: true,
    };
  }

  handleClick(i) { // technically still in Board Component
    const squares = this.state.history[0].squares.slice();
    if (calculateWinner(squares) || squares[i]) return;

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({ 
      history: history.concat([
        { 
          squares 
        }
      ])
    });
    this.setState({ xIsNext: !this.state.xIsNext });
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={this.state.history[0].squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
