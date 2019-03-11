import React from 'react';
import PhonesCatalog from './PhonesCatalog';
import Filter from './Filter';
import ShoppingCart from './ShoppingCart';
import { ShoppingCartContext } from '../ShoppingCartContext';

import { getAll as getAllPhones } from '../api/phones';

export default class PhonesPage extends React.Component {
  static contextType = ShoppingCartContext;
  // PhonesPage.contextType = ShoppingCartContext;

  state = {
    phones: [],
    query: '',
    orderBy: Filter.ORDER_BY_AGE,
  };

  componentDidMount() {
    const { orderBy, query } = this.state;

    getAllPhones({ orderBy, query }).then(phones => {
      this.setState({ phones });
    });
  }

  render() {
    return (
      <div className="PhonesPage">
        <div className="row">
          <div className="col-md-2" data-element="sidebar">
            <section>
              <h3>{this.context.items.length} items in Basket</h3>
              <Filter
                query={this.state.query}
                orderBy={this.state.orderBy}
                onQueryChanged={query => {
                  this.setState({ query }, () => this.loadPhones());
                }}
                onOrderChanged={orderBy => {
                  this.setState({ orderBy }, () => this.loadPhones());
                }}
              />
            </section>

            <section>
              <ShoppingCart />
            </section>
          </div>

          <div className="col-md-10">
            <div data-component="pagination1" />
            <div data-component="pagination2" />

            <PhonesCatalog
              phones={this.state.phones}
              baseUrl={this.props.match.path}
            />
          </div>
        </div>
      </div>
    );
  }
}
