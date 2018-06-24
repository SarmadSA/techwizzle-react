import React, { Component } from 'react';
import './css/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Profilespage from './pages/Profilespage';
import Comparepage from './pages/Comparepage';
import Aboutpage from './pages/Aboutpage';
import Contactpage from './pages/Contactpage';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">

          <Header />

          <main className="main">
            <Switch>
              <Route path="/profiles" exact component={Profilespage}/>
              <Route path="/compare" exact component={Comparepage}/>
              <Route path="/about" exact component={Aboutpage}/>
              <Route path="/contact" exact component={Contactpage}/>
              <Route path="/" component={Homepage}/>
            </Switch>
            
            <br className="clear"/>
          </main>

          <Footer />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;