import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import debounce from 'lodash/debounce';

const Filter = ({ location, history }) => {
  const params = new URLSearchParams(location.search);
  const query = params.get('query') || '';
  const orderBy = params.get('orderBy') || Filter.ORDER_BY_AGE;

  const handleQueryChange = debounce((event) => {
    params.set('query', event.target.value);

    history.push({
      pathname: location.pathname,
      search: params.toString(),
    });
  }, 500);

  const handleOrderChanged = (event) => {
    params.set('orderBy', event.target.value);

    history.push({
      pathname: location.pathname,
      search: params.toString(),
    });
  };


  return (
    <div className="Filter">
      <input
        type="text"
        value={query}
        onChange={handleQueryChange}
      />

      <select
        name="orderBy"
        value={orderBy}
        onChange={handleOrderChanged}
      >
        <option value={Filter.ORDER_BY_AGE}>by Age</option>
        <option value={Filter.ORDER_BY_NAME}>by Name</option>
      </select>
    </div>
  );
};

Filter.propTypes = {
  query: PropTypes.string,
};

Filter.ORDER_BY_AGE = 'age';
Filter.ORDER_BY_NAME = 'name';

export default withRouter(Filter);
