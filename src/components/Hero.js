import React, { Component } from 'react';
import '../css/Hero.css';

class Hero extends Component {
  render() {
    return (
      <div className="Hero">
        <h2>Web and Doctools Developer</h2>
        <p>
        I am a full stack developer and documentation tools expert. Here you can
        learn <a href="#about">ABOUT ME</a>, see
        some of my <a href="#projects">PROJECTS</a> and find links to my <a href="#social">WEB PRESENCE</a>.

        </p>
      </div>
    );
  }
}

export default Hero;
