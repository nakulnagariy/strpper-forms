import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/store'
import Step1 from './components/step-1';

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <Step1 />
      </Provider>
    );
  }
}

export default App;
