import React, { Component } from 'react';
import './css/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Profilespage from './pages/Profilespage';
import Comparepage from './pages/Comparepage';
import Aboutpage from './pages/Aboutpage';
import Contactpage from './pages/Contactpage';
import Profile from './pages/Profile';
import NotFoundPage from './pages/NotFoundPage';
import { Route, Switch, Router } from 'react-router-dom';
import ScrolToTop from './jobs/ScrollToTop';
import History from './jobs/History';

class App extends Component {
  render() {
    return (
      
      <Router history={History}>
        <ScrolToTop>
        <div className="App">

          <Header />

          <main className="main">
            <Switch>
              <Route path="/profiles" exact component={Profilespage}/>
              <Route path="/compare" exact component={Comparepage}/>
              <Route path="/about" exact component={Aboutpage}/>
              <Route path="/contact" exact component={Contactpage}/>
              <Route path="/profile/:id" exact component={Profile}/>
              <Route path="/home" exact component={Homepage}/>
              <Route path="/" exact component={Homepage}/>
              <Route render={()=> <NotFoundPage/>}/>
            </Switch>
            
            <br className="clear"/>
          </main>

          <Footer />

        </div>
        </ScrolToTop>
      </Router>
    );
  }
}

export default App;