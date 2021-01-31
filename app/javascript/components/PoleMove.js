import React from 'react';

import ajax from '../ajax';

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
    }
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
    console.warn(response);
  }

  render() {
    const poleMoves = this.props.poleMoves;
    return (
      <React.Fragment>
      <ul>
        {poleMoves.map((move) => {
          <li>
            <h4>{move.name}</h4>
            <p>{move.description}</p>
          </li>
        })}
      </ul>

      <h3>Find a trick</h3>
      <input
        value={this.state.searchTerm}
        onChange={(e) => this.onInputChange(e)}
        onKeyPress={(e) => this.onInputChange(e)}
        placeholder="Type search term and hit 'Enter'"
      />
      </React.Fragment>
    );
  }
}

export default User;
