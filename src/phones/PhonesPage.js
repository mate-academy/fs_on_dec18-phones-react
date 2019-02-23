import React from 'react';
import PhonesCatalog from './PhonesCatalog';
import PhoneViewer from './PhoneViewer';
import Filter from './Filter';
import ShoppingCart from './ShoppingCart';

const BASE_URL = 'https://mate-academy.github.io/phone-catalogue-static';
const DEFAULT_ORDER_BY = Filter.ORDER_BY_AGE;

export default class PhonesPage extends React.Component {
  state = {
    phones: [],
    selectedPhone: null,
    query: '',
    orderBy: DEFAULT_ORDER_BY
  };

  onPhoneSelected = async phone => {
    const response = await fetch(`${BASE_URL}/phones/${phone.id}.json`);
    const selectedPhone = await response.json();

    this.setState({
      selectedPhone: selectedPhone
    });
  };

  componentDidMount() {
    this.loadPhones();
  }

  async loadPhones() {
    const response = await fetch(`${BASE_URL}/phones/phones.json`);
    const phones = await response.json();

    const { orderBy, query } = this.state;
    const pattern = new RegExp(query, 'i');

    const preparedPhones = phones
      .filter((phone) => pattern.test(phone.name))
      .sort((a, b) => a[orderBy] >= b[orderBy] ? 1 : -1);

    this.setState({
      phones: preparedPhones
    });
  }

  render() {
    return (
      <div className="PhonesPage">
        <div className="row">
          <div className="col-md-2" data-element="sidebar">
            <section>
              <Filter
                query={this.state.query}
                orderBy={this.state.orderBy}
                onQueryChanged={(query) => {
                  this.setState(
                    { query },
                    () => this.loadPhones()
                  );
                }}

                onOrderChanged={(orderBy) => {
                  this.setState(
                    { orderBy },
                    () => this.loadPhones()
                  );
                }}
              />
            </section>

            <section>
              <ShoppingCart/>
            </section>
          </div>

          <div className="col-md-10">
            <div data-component="pagination1"/>
            <div data-component="pagination2"/>

            {this.state.selectedPhone ? (
              <PhoneViewer phone={this.state.selectedPhone}/>
            ) : (
              <PhonesCatalog
                phones={this.state.phones}
                onPhoneSelected={this.onPhoneSelected}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}
