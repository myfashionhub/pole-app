import React from 'react';

export class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: JSON.parse(window.localStorage.user || '{}'),
    };
  }

  render() {
    const user = this.state.user;
    const username = user.stage_name || user.email;

    return (
      <header>
        <div className="profile">
          <div className="profile-image"></div>
          <div className="user">{username}</div>
        </div>
        <h1>{this.props.title}</h1>
      </header>
    );
  }
}
