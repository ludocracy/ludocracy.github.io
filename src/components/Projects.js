import React, { Component } from 'react';
import '../css/Projects.css';
import Project from './Project';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.projects = [
      {
        title: 'Kollaboscope',
        screenshot: '',
        description: '',
        stack: ['React', 'Firebase', 'React-YouTube', 'YouTube API']
      },
      {
        title: 'eargASMR',
        screenshot: '',
        description: '',
        stack: ['React Native', 'React Native Sound', 'Firebase', 'freesounds API']
      },
      {
        title: 'DRY Drawings',
        screenshot: '',
        description: '',
        stack: ['React', 'Firebase', 'Rails', 'ReDuxml']
      },
      {
        title: 'Dita For Small Teams',
        screenshot: '',
        description: '',
        stack: ['Docker', 'BaseX', 'GitLab', 'XQuery']
      }
    ]
  }
  render() {
    let projectComps = this.projects.map((project, key) => (
      <Project project={project} key={key}/>
    ));
    return (
      <div className="Projects">
        { projectComps }
      </div>
    );
  }
}

export default Projects;
