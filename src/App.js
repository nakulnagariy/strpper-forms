import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Step1 from './components/rentalAgreementForm/step-1';
import Step2 from './components/rentalAgreementForm/step-2';

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <div>
          <Header />
          <Step1 />
          <Step2 />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
