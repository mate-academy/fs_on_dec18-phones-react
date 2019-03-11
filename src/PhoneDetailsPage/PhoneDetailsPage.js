import React from 'react';

import { getById as getPhone } from '../api/phones';
import PhoneViewer from './PhoneViewer';

const BASE_IMG_URL = 'https://mate-academy.github.io/fs_on_dec18/public/';

class PhoneDetailsPage extends React.Component {
  state = { phone: null };

  async componentDidMount() {
    const { phoneId } = this.props.match.params;
    const phone = await getPhone(phoneId);

    this.setState({ phone });
  }

  render() {
    const { phone } = this.state;
    const { addToShoppingCart } = this.props;

    return phone ? <PhoneViewer phone={phone} /> : <div>Loading...</div>;
  }
}

export default PhoneDetailsPage;
