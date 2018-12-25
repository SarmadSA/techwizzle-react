import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Router } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';
import History from './utils/History';
import Routes from './components/Routes';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <Router history={History}>
        <ScrollToTop>
        <div className="App">

          <Header />

          <main className="main">
            <Routes />
            <br className="clear"/>
          </main>

          <Footer />

        </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;