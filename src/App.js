import React, { Component } from 'react';
import './css/App.css';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import {Route, BrowserRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">

          <Header />

          <main className="main">
            <Route path="/test" exact render={() => <Homepage />}/>

            <br className="clear"/>
          </main>

          <Footer />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;