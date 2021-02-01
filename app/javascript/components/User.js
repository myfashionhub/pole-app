import React from 'react';

import ajax from '../ajax';

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: null,
        stage_name: '',
        email: '',
        biography: null,
      },
    };
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
    const { user } = response;
    if (user) {
      document.cookie = `user=${user.stage_name || user.email}`;
      window.location.replace('/pole-tricks');
    }
  }

  render() {
    const user = this.state.user;
    return (
      <React.Fragment>
        <label>Stage name</label>
        <input value={user.stage_name} onChange={(e) => this.onInputChange('stage_name', e)} />
        <label>Email</label>
        <input value={user.email} onChange={(e) => this.onInputChange('email', e)} />

        <button onClick={() => this.findOrCreateUser()}>Sign up/Log in</button>
      </React.Fragment>
    );
  }
}

export default User;
