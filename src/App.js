import React from 'react';
import { connect } from 'react-redux';
import { Route, NavLink, Switch } from 'react-router-dom';

import PhoneDetailsPage from './PhoneDetailsPage';
import PhonesPage from './PhonesPage';

import './App.css';

const App = ({ messageFromStore }) => (
  <div className="App">
    <h1>{ messageFromStore }</h1>
    <header style={{ padding: 10 }}>
      <ul className="nav nav-pills">
        <li role="presentation">
          <NavLink to="/">Home</NavLink>
        </li>
        <li role="presentation">
          <NavLink to="/phones">Phones</NavLink>
        </li>
      </ul>
    </header>

    <div className="container-fluid">
      <Switch>
        <Route exact path="/" render={() => <h1>Home Page</h1>} />
        <Route path="/phones/:phoneId" component={PhoneDetailsPage} />
        <Route path="/phones" component={PhonesPage} />
      </Switch>
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    messageFromStore: state.message,
  };
};

export default connect(mapStateToProps)(App);
