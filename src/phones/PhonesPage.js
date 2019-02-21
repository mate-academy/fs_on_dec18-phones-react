import React from 'react';
import PhonesCatalog from './PhonesCatalog';

const BASE_URL = 'https://mate-academy.github.io/phone-catalogue-static';

export default class PhonesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phones: []
    };
  }

  async componentDidMount() {
    const response = await fetch(`${ BASE_URL }/phones/phones.json`);
    const phones = await response.json();

    this.setState({
      phones
    });
  }

  render() {
    return (
      <div className="PhonesPage">
        <div className="row">

          <div className="col-md-2" data-element="sidebar">
            <section>
              <div data-component="filter"></div>
            </section>

            <section>
              <div data-component="shopping-cart"></div>
            </section>
          </div>

          <div className="col-md-10">
            <div data-component="pagination1"></div>
            <div data-component="pagination2"></div>

            <PhonesCatalog phones={this.state.phones}/>
          </div>
        </div>
      </div>
    );
  }
}
