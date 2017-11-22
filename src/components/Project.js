import React, { Component } from 'react';
import '../css/Project.css';

class Project extends Component {
  render() {
    let project = this.props.project;
    let stackDescr = `Stack: ${project.stack.join(', ')}`;
    return (
      <div className="Project">
        <h3><a rel="noopener noreferrer" target="_blank"
          href={project.url}>{project.title}</a></h3>
        <div className="project-descr-img">
          <p>{project.description}</p>
          <a className="image-as-link" rel="noopener noreferrer" target="_blank"
            href={project.url}>
            <img className={project.title} src={project.screenshot} alt={project.title}/>
          </a>
        </div>
        <p>
          { stackDescr }
        </p>
      </div>
    );
  }
}

export default Project;
