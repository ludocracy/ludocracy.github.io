import React, { Component } from 'react';
import '../css/Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <h2>My web presence</h2>
        <p>My <b><a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/pekong/">LinkedIn</a></b> profile has more details on my professional history, and I respond to messages promptly.</p>
        <p>I also write about software, contact issues and climate change on <b><a rel="noopener noreferrer" target="_blank" href="https://medium.com/@peterkong">Medium</a></b>.</p>
        <p>And you can browse the source code for my many projects on <b><a rel="noopener noreferrer" target="_blank" href="https://github.com/ludocracy">GitHub</a></b>.</p>
        <p>If you are interested in hiring me, please <b><a rel="noopener noreferrer" target="_blank" href="https://ludocracy.github.io/random-static-files/outcomes/peter-kong-resume.docx">download my résumé</a></b>.</p>
      </div>
    );
  }
}

export default Contact;
