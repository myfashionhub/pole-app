import React from 'react';

import ajax from '../ajax';
import { Tags } from './Tags';

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      poleMoves: [],
      tagMap: {},
      user: document.cookie.split('=')[1],
    };
  }

  /*-- Helpers --*/
  onInputChange(e) {
    if (e.code === 'Enter') {
      this.searchPoleMoves();
    } else {
      this.setState({ searchTerm: e.target.value });
    }
  }

  getMode(pole_modes) {
    if (pole_modes == 'spin_static') {
      return 'Spin or static';
    } else {
      return pole_modes.charAt(0).toUpperCase() + pole_modes.slice(1)
    }
  }

  /*-- API functions --*/
  async searchPoleMoves(e) {
    const response = await ajax.get('/pole_moves/search', { searchTerm: this.state.searchTerm });

    const tagMap = {};
    response.tags.forEach((tag) => tagMap[tag.id] = tag.name);

    this.setState({
      poleMoves: response.poleMoves,
      tagMap,
    });
  }

  render() {
    const poleMoves = this.state.poleMoves;
    return (<React.Fragment>
      <header>Hi {this.state.user}</header>

      <h3>Find a trick</h3>
      <input
        value={this.state.searchTerm}
        onChange={(e) => this.onInputChange(e)}
        onKeyPress={(e) => this.onInputChange(e)}
        placeholder="Type search term and hit 'Enter'"
      />

      <ul>
        {poleMoves.map((move, index) => (
          <li key={index}>
            <h4>{move.name}</h4>
            <p>{move.description}</p>
            <span>{move.level}</span>
            <span>{this.getMode(move.pole_modes)}</span>

            <Tags
              tagMap={this.state.tagMap}
              tagIds={move.tag_ids}
            />
          </li>
        ))}
      </ul>
    </React.Fragment>);
  }
}

export default User;
