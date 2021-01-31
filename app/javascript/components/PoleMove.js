import React from 'react';

import ajax from '../ajax';

class User extends React.Component {
  constructor(props) {
    super(props);
  }

  /*-- Helpers --*/
  onInputChange(key, e) {
    const user = { ...this.state.user };
    user[key] = e.target.value;
    this.setState({ user });
  }

  /*-- API functions --*/
  async findOrCreateUser() {
    const response = await ajax.post('/users', this.state.user);
    if (response.user) {
      window.location.replace('/pole-moves');
    }
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
      </React.Fragment>
    );
  }
}

export default User;
