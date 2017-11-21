import React, { Component } from 'react';
import '../css/NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <img src={require("../images/headshot.png")} alt="peter-kong"/>
        <h1>Peter Kong</h1>
        <nav>
          <a href='#hero'>Home</a>
          <a href='#about'>About</a>
          <a href='#projects'>Projects</a>
          <a href='#social'>Contact</a>
        </nav>
      </div>
    );
  }
}

export default NavBar;
