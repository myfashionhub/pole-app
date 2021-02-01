import React from 'react';

import { capitalize } from '../utils';
import { Tags } from './Tags';

export class PoleMoveList extends React.Component {
  getMode(pole_modes) {
    if (pole_modes == 'spin_static') {
      return 'Spin or static';
    } else {
      return capitalize(pole_modes);
    }
  }

  render() {
    const poleMoves = this.props.poleMoves;

    return (
      <ul>
        {poleMoves.map((move, index) => (
          <li key={index}>
            <h4>{move.name}</h4>
            <p>{move.description}</p>
            <p>{capitalize(move.level)}</p>
            <p>{this.getMode(move.pole_modes)}</p>

            <Tags
              tagMap={this.props.tagMap}
              tagIds={move.tag_ids}
              moveId={move.id}
            />

            <button onClick={() => this.saveMove(move.id)}>Save</button>
          </li>
        ))}
      </ul>
    );
  }
}
