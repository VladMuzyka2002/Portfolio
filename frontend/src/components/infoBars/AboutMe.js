import React from 'react';
import "../../style/Section.css"; 

const AboutMe = ({ isOpen, toggle }) => {
  return (
    <div className="section">
      <button onClick={toggle}>About Me</button>
      <div className={`section-content ${isOpen ? 'open' : ''}`}>
        <h2>About Me</h2>
        <p>As you may have guessed, my name is Vladislav Muzyka, or just Vlad for short. I am an immigrant from Belarus.</p>
      </div>
    </div>
  );
};

export default AboutMe;
