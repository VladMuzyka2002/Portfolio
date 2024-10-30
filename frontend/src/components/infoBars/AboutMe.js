import React from 'react';
import "../../style/Section.css"; 

const AboutMe = ({ isOpen, toggle }) => {
  return (
    <div className="section">
      <button onClick={toggle}>About Me</button>
      <div className={`section-content ${isOpen ? 'open' : ''}`}>
        <h2>About Me</h2>
        <p>As you may have guessed, my name is Vladislav Muzyka, or just Vlad for short. I am a curious and passionate computer scientist that wishes to learn more every day. My interests lie wide across programming, but my main interests lie in Web Development. Glad to see you here!</p>
      </div>
    </div>
  );
};

export default AboutMe;
