import React from 'react';

import ajax from '../ajax';
import { capitalize } from '../utils';

import { Header } from './Header';
import { PoleMoveList } from './PoleMoveList';

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      searchResults: [],
      userMoves: [],
      tagMap: {},
      user: JSON.parse(window.localStorage.user || '{}'),
    };

    this.getMoves();
  }

  /*-- Helpers --*/
  onInputChange(e) {
    if (e.code === 'Enter') {
      this.searchPoleMoves();
    } else {
      this.setState({ searchTerm: e.target.value });
    }
  }

  /*-- API functions --*/
  async searchPoleMoves(e) {
    const response = await ajax.get('/pole_moves/search', { searchTerm: this.state.searchTerm });

    const tagMap = {};
    response.tags.forEach((tag) => tagMap[tag.id] = tag.name);

    this.setState({
      searchResults: response.poleMoves,
      tagMap,
    });
  }

  async saveMove(moveId) {
    const resp = await ajax.post(`/users/${this.state.user.id}/moves`, { move_id: moveId });
    if (resp.history) {
      window.alert('Move successfully saved');
    }
  }

  async getMoves() {
    const resp = await ajax.get(`/users/${this.state.user.id}/moves`);
    if (resp.pole_moves) {
      this.setState({ userMoves: resp.pole_moves });
    }
  }

  render() {
    return (<div className="page-container">
      <Header title="Your tricks" />

      <h3>Find a trick</h3>
      <input
        value={this.state.searchTerm}
        onChange={(e) => this.onInputChange(e)}
        onKeyPress={(e) => this.onInputChange(e)}
        placeholder="Type search term and hit 'Enter'"
      />

      <PoleMoveList
        poleMoves={this.state.searchResults}
        tagMap={this.state.tagMap}
      />
      <PoleMoveList
        poleMoves={this.state.userMoves}
        tagMap={this.state.tagMap}
      />
    </div>);
  }
}

export default User;
