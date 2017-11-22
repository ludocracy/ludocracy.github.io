import React, { Component } from 'react';
import '../css/Projects.css';
import Project from './Project';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.projects = [
      {
        title: 'Kollaboscope',
        url: 'https://kollaboscope-183217.firebaseapp.com/',
        screenshot: '',
        description: '',
        stack: ['React', 'Firebase', 'React-YouTube', 'YouTube API']
      },
      {
        title: 'eargASMR',
        url: 'https://github.com/ludocracy/eargASMR',
        screenshot: '',
        description: '',
        stack: ['React Native', 'React Native Sound', 'Firebase', 'freesounds API']
      },
      {
        title: 'DRY Drawings',
        url: '',
        screenshot: '',
        description: '',
        stack: ['React', 'Firebase', 'Rails', 'ReDuxml']
      },
      {
        title: 'Dita For Small Teams',
        url: 'https://github.com/dita-community/dita-for-small-teams/wiki',
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
        <h2>Projects</h2>
        { projectComps }
      </div>
    );
  }
}

export default Projects;
