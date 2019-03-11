import React from 'react';

import { getById as getPhone } from '../api/phones';
import PhoneViewer from './PhoneViewer';


class PhoneDetailsPage extends React.Component {
  state = { phone: null };

  async componentDidMount() {
    const { phoneId } = this.props.match.params;
    const phone = await getPhone(phoneId);

    this.setState({ phone });
  }

  render() {
    const { phone } = this.state;

    return phone ? <PhoneViewer phone={phone} /> : <div>Loading...</div>;
  }
}

export default PhoneDetailsPage;
