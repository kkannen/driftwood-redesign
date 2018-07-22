import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import {Link} from "react-router-dom";

import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import Rules from './components/pages/Rules';
import Wines from './components/pages/Wines';
import WineClub from './components/pages/WineClub';
import Header from './components/Header';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Navbar/>
      <Header/>
        <div className="mainContent">
          <Switch>
            <Route path="/rules" component={Rules}/>
            <Route path="/wines" component={Wines}/>
            <Route path="/wineclub" component={WineClub}/>
            <Route path="/" component={Home}/>
          </Switch>
        </div>
        <footer>
          <div>
            <Link to="/" className="brand footerbrand">Driftwood Estate Winery</Link>
          </div>
        </footer>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
