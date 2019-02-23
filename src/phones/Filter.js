import React from 'react';

class Filter extends React.Component {
  render() {
    const { onQueryChanged, onOrderChanged } = this.props;
    const { query, orderBy } = this.props;

    return (
      <div className="Filter">
        <input
          type="text"
          value={query}
          onChange={(event) => {
            onQueryChanged(event.target.value);
          }}
        />

        <select
          name="orderBy"
          value={orderBy}
          onChange={(event) => {
            onOrderChanged(event.target.value);
          }}
        >
          <option value={Filter.ORDER_BY_AGE}>by Age</option>
          <option value={Filter.ORDER_BY_NAME}>by Name</option>
        </select>
      </div>
    );
  }
}

Filter.ORDER_BY_AGE = 'age';
Filter.ORDER_BY_NAME = 'name';


export default Filter;
