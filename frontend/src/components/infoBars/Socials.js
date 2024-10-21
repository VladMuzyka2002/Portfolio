import React from 'react';
import "../../style/Section.css"; 

const Socials = ({ isOpen, toggle }) => {
  return (
    <div className="section">
      <button onClick={toggle}>My Socials</button>
      <div className={`section-content ${isOpen ? 'open' : ''}`}>
        <h2>My Socials</h2>
        <p>LinkedIn, GitHub, Twitter, Reddit, etc.</p>
      </div>
    </div>
  );
};

export default Socials;
