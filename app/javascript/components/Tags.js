import React from 'react';

export class Tags extends React.Component {
  render() {
    return (
      <div>
      {this.props.tagIds.map((tagId) => (
        <span>{this.props.tagMap[tagId]}</span>
      ))}
      </div>
    );
  }
}
