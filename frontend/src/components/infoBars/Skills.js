import React from 'react';
import "../../style/Section.css"; 

const Skills = ({ isOpen, toggle }) => {
  return (
    <div className="section">
      <button onClick={toggle}>My Skills</button>
      <div className={`section-content ${isOpen ? 'open' : ''}`}>
        <h2>My Skills</h2>
        <ul>
          <li>React</li>
          <li>Node.js</li>
          <li>PostgreSQL</li>
          <li>WebGL</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
