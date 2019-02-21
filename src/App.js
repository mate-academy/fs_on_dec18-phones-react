import React, { Component } from 'react';
import PhonesPage from './phones/PhonesPage';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedPhone: null,
    }
  }

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          { this.state.selectedPhone
            ? <div>Phone details</div>
            : <PhonesPage />
          }
        </div>
      </div>
    );
  }
}

export default App;
