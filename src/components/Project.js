import React, { Component } from 'react';
import '../css/Project.css';

class Project extends Component {
  render() {
    let project = this.props.project;
    let stackLis = project.stack.map(stackItem => <li>{stackItem}</li>);
    return (
      <div className="Project">
        <h3>{project.title}</h3>
        <ul>
          { stackLis }
        </ul>
        <div className="project-content">
          <img src={project.screenshot} alt={project.title}/>
          <p>{project.description}</p>
        </div>
      </div>
    );
  }
}

export default Project;
