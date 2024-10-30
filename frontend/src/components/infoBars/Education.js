import React from 'react';
import "../../style/Section.css"; 

const Education = ({ isOpen, toggle }) => {
  return (
    <div className="section">
      <button onClick={toggle}>Education</button>
      <div className={`section-content ${isOpen ? 'open' : ''}`}>
        <div className="education-header">
          <h2>Education</h2>
        </div>
        <div className="education-info">
          <p className="university">Drexel University</p>
          <p className="dates">2020 - 2024</p>
        </div>
        <div className="degree">
          <p>B.S. in Computer Science</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
