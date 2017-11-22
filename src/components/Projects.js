import React, { Component } from 'react';
import '../css/Projects.css';
import Project from './Project';
import projectsData from '../projects.json';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.projects = projectsData.projects;
  }
  render() {
    let projectComps = this.projects.map((project, key) => (
      <Project project={project} key={key}/>
    ));
    return (
      <div className="Projects">
        <h2>Projects</h2>
        { projectComps }
      </div>
    );
  }
}

export default Projects;
