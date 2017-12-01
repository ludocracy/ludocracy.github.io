import React, { Component } from 'react';
import './App.css';
import ScrollableAnchor from 'react-scrollable-anchor';
import {
  Home,
  About,
  Projects,
  Contact,
  NavBar
} from './components';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';

class App extends Component {

  render() {
    return (
      <div className="App">
        <ScrollableAnchor id={'home'}>
          <StickyHeader header={ <NavBar /> }>
            <section>
              <Home />
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

        <ScrollableAnchor id={'contact'}>
          <section>
            <Contact />
          </section>
        </ScrollableAnchor>
      </div>
    );
  }
}

export default App;
