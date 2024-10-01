import React from 'react';
import "../../style/Section.css"; 

const Education = ({ isOpen, toggle }) => {
  return (
    <div className="section">
      <button onClick={toggle}>Education</button>
      <div className={`section-content ${isOpen ? 'open' : ''}`}>
        <h2>Education</h2>
        <p>Degree in Computer Science from XYZ University...</p>
      </div>
    </div>
  );
};

export default Education;
