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
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ScrollableAnchor id={'hero'}>
          <StickyHeader header={ <NavBar /> }>
            <section>
              <Hero />
            </section>
          </StickyHeader>
        </ScrollableAnchor>
        <ScrollableAnchor id={'about'}>
          <section>
            <About />
          </section>
        </ScrollableAnchor>

        <ScrollableAnchor id={'projects'}>
          <section>
            <Projects />
          </section>
        </ScrollableAnchor>

        <ScrollableAnchor id={'social'}>
          <section>
            <Social />
          </section>
        </ScrollableAnchor>
      </div>
    );
  }
}

export default App;
