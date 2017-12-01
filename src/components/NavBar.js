import React, { Component } from 'react';
import '../css/NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <img className="headshot" src={require("../images/headshot.png")} alt="peter-kong"/>
        <a className="name" href='#home'><h1>Peter Kong</h1></a>
        <nav>
          <a className="home-nav" href='#home'>Home</a>
          <a href='#about'>About</a>
          <a href='#projects'>Projects</a>
          <a href='#contact'>Contact</a>
        </nav>
      </div>
    );
  }
}

export default NavBar;
