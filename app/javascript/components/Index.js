import React from 'react';

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item: {
        name: null,
        brand: null,
        store: null,
        price: null,
        price_range: null,
        clothing_category: null,
        weather_category: null,
        utility_category: null,
        date_purchased: null,
        date_discarded: null,
      },
    };
  }

  /*-- Helpers --*/
  displayFieldName(key) {
    return key
      .split('_')
        .map(s => (s.charAt(0).toUpperCase() + s.slice(1)))
        .join(' ');
  }

  onItemChange(key, e) {
    const item = { ...this.state.item };
    item[key] = e.target.value;
    this.setState({ item });
  }

  /*-- API functions --*/
  async createItem() {
    // TODO: Ajax utils
    const response = await fetch('/items', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: { 'Content-Type': 'application/json' },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(this.state.item),
    });
  }

  render() {
    const item = this.state.item;
    return (
      <React.Fragment>
        {Object.keys(item).map((key) => {
          return (
            <div className='row' key={key}>
              <label>{this.displayFieldName(key)}</label>
              <input
                value={item[key] || ''}
                onChange={(e) => this.onItemChange(key, e)} />
            </div>
          );
        })}

        <button onClick={() => this.createItem()}>Create</button>
      </React.Fragment>
    );
  }
}

export default Index
