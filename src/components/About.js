import React, { Component } from 'react';
import '../css/About.css';

class About extends Component {
  render() {
    return (
      <div className="About">
        <div className="skills">
          <h3>Skills</h3>
          <p>JavaScript</p>
          <p>React</p>
          <p>React Native</p>
          <p>Elm</p>
          <p>Node/Express</p>
          <p>Ruby/Rails</p>
          <p>Python/Django</p>
          <p>MongoDB</p>
          <p>PostgreSQL</p>
          <p>Firebase</p>
          <p>Heroku</p>
          <p>Git</p>
          <p>Docker</p>
          <p>Unix</p>
          <p>XML/XQuery/Dita</p>
        </div>
        <div className="words">
          <p>I am an Austin native and graduate of General Assembly.</p>
          <p>I worked for 8 years in the semiconductor industry, programming <a>robots</a> with <a>plasma guns</a>,
          and writing <a>software</a> to generate documentation from chip designs.
          I then made a transition to web development to present my ideas to the world, a few of which are <a href="#projects">presented here</a>.
          </p>
          <p>My interests are in political philosophy, climate change, <a>LCS</a>, <a href="#that one medium article">blockchain</a>, <a href="amigurumi">crochet</a>, <a href="">rhythm bones</a>, and <a>minesweeper</a> where my best time on expert is 58 seconds.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
