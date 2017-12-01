import React, { Component } from 'react';
import '../css/Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h2>Web and Doctools Developer</h2>
        <p>
        Welcome! I am a full stack developer and documentation tools expert born and based in Austin, Texas.
        I work mainly in <b>React</b>, <b>Node</b>, <b>Firebase</b> and <b>Rails</b>.
        </p>
        <p>
        Here you can learn <b><a href="#about">about me</a></b>,
        see some of my <b><a href="#projects">projects</a></b>,
        and find links to my <b><a href="#contact">web presence</a></b>.
        </p>
      </div>
    );
  }
}

export default Home;
