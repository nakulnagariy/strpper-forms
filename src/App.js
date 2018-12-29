import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Step1 from './components/rentalAgreementForm/step-1';
import Step2 from './components/rentalAgreementForm/step-2';
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <div>
          <Header />
            <Router>
              <Switch>
                <Route exact path='/' component={Step1}/>
                <Route path='/step2' component={Step2}/>
              </Switch>
            </Router>
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
