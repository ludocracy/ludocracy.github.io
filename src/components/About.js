import React, { Component } from 'react';
import '../css/About.css';

class About extends Component {
  render() {
    return (
      <div className="About">
        <div className="skills">
          <h3>Skills</h3>
          <p>JavaScript</p>
          <p>React</p>
          <p>React Native</p>
          <p>Elm</p>
          <p>Node/Express</p>
          <p>Ruby/Rails</p>
          <p>Python/Django</p>
          <p>MongoDB</p>
          <p>PostgreSQL</p>
          <p>Firebase</p>
          <p>Heroku</p>
          <p>Git</p>
          <p>Docker</p>
          <p>Unix</p>
          <p>XML/XQuery/Dita</p>
        </div>
        <div className="words">
          <h2>About me</h2>
          <p>I am an Austin native and graduate of <a rel="noopener noreferrer" target="_blank" href="https://generalassemb.ly">General Assembly</a>.</p>
          <p>I worked for 8 years in the semiconductor industry, programming <a rel="noopener noreferrer" target="_blank" href="http://fanucamerica.com/products/robots/">robots</a> with <a rel="noopener noreferrer" target="_blank" href="http://www.sulzer.com/da/Products-and-Services/Turbomachinery-Services/Repair-Services/Coatings/Atmospheric-Plasma-Spraying-APS">plasma guns</a>,
          and writing <a rel="noopener noreferrer" target="_blank" href="https://rubygems.org/gems/ruby-dita/versions/0.4.0">software</a> to generate documentation from chip designs.
          I then made a transition to web development to present my ideas to the world, a few of which are <a href="#projects">presented here</a>.
          </p>
          <p>My interests are in political philosophy, climate change, <a rel="noopener noreferrer" target="_blank" href="https://eu.lolesports.com/en/league/na-lcs">LCS</a>, <a rel="noopener noreferrer" target="_blank" href="https://medium.com/@peterkong/on-blockchain-and-creative-capital-a48d074b0359">blockchain</a>, <a rel="noopener noreferrer" target="_blank" href="https://www.google.com/search?q=amigurumi&safe=off&rlz=1C5CHFA_enUS712US713&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiYoNu63tLXAhVp74MKHSXQAwsQ_AUICigB&biw=1241&bih=676">crochet</a>, <a rel="noopener noreferrer" target="_blank" href="https://www.rhythmbones.com/">rhythm bones</a>, and <a rel="noopener noreferrer" target="_blank" href="http://www.chezpoor.com/minesweeper/minesweeper.html">minesweeper</a> where my best time on expert is 58 seconds.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
