import React, { Component } from 'react';
import '../css/Projects.css';
import Project from './Projects';

class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        <p> list projects with screenshots</p>
        <Project />
      </div>
    );
  }
}

export default Projects;
