import React from 'react';
import PhonesCatalog from './PhonesCatalog';
import PhoneViewer from './PhoneViewer';

const BASE_URL = 'https://mate-academy.github.io/phone-catalogue-static';

export default class PhonesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phones: [],
      selectedPhone: null,
    };

    this.onPhoneSelected = this.onPhoneSelected.bind(this);
  }

  async componentDidMount() {
    const response = await fetch(`${ BASE_URL }/phones/phones.json`);
    const phones = await response.json();

    this.setState({
      phones,
    });
  }

  async onPhoneSelected(phone) {
    const response = await fetch(`${ BASE_URL }/phones/${ phone.id }.json`);
    const selectedPhone = await response.json();

    this.setState({
      selectedPhone
    });
  };

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

            { this.state.selectedPhone
              ? (
                <PhoneViewer phone={this.state.selectedPhone} />
              )
              : (
                <PhonesCatalog
                  phones={this.state.phones}
                  onPhoneSelected={this.onPhoneSelected}
                />
              )
            }

          </div>
        </div>
      </div>
    );
  }
}
