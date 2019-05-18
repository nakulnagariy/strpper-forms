// import React, { Component, lazy, Suspense } from 'react';
import React, { Component} from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Main from './components/routing/mainNavRouting'

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <React.Fragment>
          <Router>
            <React.Fragment>
              <Header />
              <Main />
              <Footer />
            </React.Fragment>
          </Router>
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;
