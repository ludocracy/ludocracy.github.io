import React, { Component } from 'react';
import '../css/Project.css';

class Project extends Component {
  render() {
    let project = this.props.project;
    let stackPs = project.stack.map((stackItem, key) => <p key={key}>{stackItem}</p>);
    return (
      <div className="Project">
        <h3><a rel="noopener noreferrer" target="_blank" href={project.url}>{project.title}</a></h3>
        <ul>
          { stackPs }
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
