import React, { Component } from 'react';
import './App.css';
import ScrollableAnchor from 'react-scrollable-anchor';
import {
  Hero,
  About,
  Projects,
  Social,
  NavBar
} from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <ScrollableAnchor id={'hero'}>
          <Hero />
        </ScrollableAnchor>

        <ScrollableAnchor id={'about'}>
          <About />
        </ScrollableAnchor>

        <ScrollableAnchor id={'projects'}>
          <Projects />
        </ScrollableAnchor>

        <ScrollableAnchor id={'social'}>
          <Social />
        </ScrollableAnchor>
      </div>
    );
  }
}

export default App;
