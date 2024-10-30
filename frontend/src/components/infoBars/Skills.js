import React from 'react';
import "../../style/Section.css"; 

const Skills = ({ isOpen, toggle }) => {
  return (
    <div className="section">
      <button onClick={toggle}>My Skills</button>
      <div className={`section-content ${isOpen ? 'open' : ''}`}>
        <h2>My Skills</h2>
        <ul>
          <li>
            
            <h4>Languages</h4>
            <ul>
              <li>JavaScript</li>
              <li>Java</li>
              <li>Python</li>
              <li>C</li>
              <li>C++</li>
              <li>C#</li>
              <li>Racket</li>
              <li>Context API</li>
              <li>Redux</li>
            </ul>
          </li>
          <li>
            <h4>Frameworks and Libraries</h4>
            <ul>
              <li>Node</li>
              <li>React</li>
              <li>Express</li>
              <li>ASP.NET</li>
              <li>WebGL</li>
            </ul>
          </li>
          <li>
            <h4>SQL and Database Management Systems</h4>
            <ul>
              <li>PostgreSQL</li>
              <li>MySQL</li>
              <li>MongoDB</li>
            </ul>
          </li>
          <li>
            <h4>Concepts</h4>
            <ul>
              <li>Object Oriented Programming</li>
              <li>Concurrent Programming</li>
              <li>Agile</li>
              <li>Design Patterns</li>
              <li>Model-View-Controller Architectural Pattern</li>
              <li>Version Control</li>
              <li>Test Driven Development</li>
              <li>Continuous Integration/Continuous Deployment</li>
              <li>Git</li>
            </ul>
          </li>
          <li>
            <h4>Software</h4>
            <ul>
              <li>Github/Gitlab</li>
              <li>Docker</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};


export default Skills;
