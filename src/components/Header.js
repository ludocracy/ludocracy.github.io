import React, { Component } from 'react';
import '../css/Header.css';
import { NavLink } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1>title</h1>
        <nav>
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </div>
    );
  }
}

export default Header;
