import React from 'react';
import { connect } from 'react-redux';

import PhonesCatalog from './PhonesCatalog';
import Filter from './Filter';
import ShoppingCart from './ShoppingCart';

import { loadPhones } from '../ducks/phones';

class PhonesPage extends React.Component {
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
    this.props.loadPhones(this.props.location)
  };

  render() {
    return (
      <div className="PhonesPage">
        <div className="row">
          <div className="col-md-2" data-element="sidebar">
            <section>
              <h3>{this.props.items.length} items in Basket</h3>
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
              baseUrl={this.props.match.path}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.shoppingCart,
});

const mapDispatch = {
  loadPhones: loadPhones
};

export default connect(
  mapStateToProps,
  mapDispatch
)(PhonesPage);
