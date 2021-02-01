import React from 'react';

export class Tags extends React.Component {
  render() {
    return (
      <div>
      {this.props.tagIds.map((tagId) => (
        <span className="tag" key={`${this.props.moveId}-${tagId}`}>
          {this.props.tagMap[tagId]}
        </span>
      ))}
      </div>
    );
  }
}
