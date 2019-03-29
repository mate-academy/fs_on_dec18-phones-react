import React from 'react';
import { connect } from 'react-redux';
import { Route, NavLink, Switch } from 'react-router-dom';

import PhoneDetailsPage from './PhoneDetailsPage';
import PhonesPage from './PhonesPage';
import * as messageActions from './ducks/message';

import './App.css';

const App = ({ messageFromStore, changeMessage }) => (
  <div className="App">
    <h1>{ messageFromStore }</h1>
    <input
      type="text"
      value={messageFromStore}
      onChange={(event) => {
        changeMessage(event.target.value)
      }}
    />
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

const mapDispatch = {
  changeMessage: messageActions.changeMessage
};

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     changeMessage(...args) {
//       const action = messageActions.changeMessage(...args);
//       dispatch(action);
//     }
//   };
// };

export default connect(
  mapStateToProps,
  mapDispatch
)(App)
