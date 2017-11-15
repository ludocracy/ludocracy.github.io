import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import {
  Home,
  About,
  Projects,
  Header,
  Footer,
} from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
          </div>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
