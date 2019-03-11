import React from 'react';
import PhonesCatalog from './PhonesCatalog';
import Filter from './Filter';
import ShoppingCart from './ShoppingCart';
import { ShoppingCartContext } from '../ShoppingCartContext';

import { getAll as getAllPhones } from '../api/phones';

export default class PhonesPage extends React.Component {
  static contextType = ShoppingCartContext;

  state = {
    phones: [],
  };

  componentDidMount() {
    this.loadPhones();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.search === this.props.location.search) {
      return;
    }

    this.loadPhones()
  }

  loadPhones = () => {
    const params = new URLSearchParams(this.props.location.search);
    const query = params.get('query') || '';
    const orderBy = params.get('orderBy') || Filter.ORDER_BY_AGE;

    getAllPhones({ orderBy, query }).then(phones => {
      this.setState({ phones });
    });
  };

  render() {
    return (
      <div className="PhonesPage">
        <div className="row">
          <div className="col-md-2" data-element="sidebar">
            <section>
              <h3>{this.context.items.length} items in Basket</h3>
              <Filter />
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
