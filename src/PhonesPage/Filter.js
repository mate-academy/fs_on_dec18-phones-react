import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import debounce from 'lodash/debounce';

class Filter extends React.Component {
  constructor(props) {
    super(props);

    const params = new URLSearchParams(props.location.search);

    this.state = {
      query: params.get('query') || '',
    };
  }

  handleQueryChange = (event) => {
    this.setState({
      query: event.target.value,
    });

    this.updateQuery(event.target.value);
  };

  updateQuery = debounce((query) => {
    const params = new URLSearchParams(this.props.location.search);

    params.set('query', query);

    this.updateUrl(params);
  }, 500);

  handleOrderChanged = (event) => {
    const params = new URLSearchParams(this.props.location.search);

    params.set('orderBy', event.target.value);

    this.updateUrl(params);
  };

  updateUrl = (params) => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: params.toString(),
    });
  };

  render() {
    const { location } = this.props;
    const params = new URLSearchParams(location.search);

    const orderBy = params.get('orderBy') || Filter.ORDER_BY_AGE;
    const { query } = this.state;

    return (
      <div className="Filter">
        <input
          type="text"
          value={query}
          onChange={this.handleQueryChange}
        />

        <select
          name="orderBy"
          value={orderBy}
          onChange={this.handleOrderChanged}
        >
          <option value={Filter.ORDER_BY_AGE}>by Age</option>
          <option value={Filter.ORDER_BY_NAME}>by Name</option>
        </select>
      </div>
    );
  };
}

Filter.propTypes = {
  query: PropTypes.string,
};

Filter.ORDER_BY_AGE = 'age';
Filter.ORDER_BY_NAME = 'name';

export default withRouter(Filter);
