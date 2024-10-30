import React from 'react';
import "../../style/Section.css"; 

const Socials = ({ isOpen, toggle }) => {
  return (
    <div className="section">
      <button onClick={toggle}>My Socials</button>
      <div className={`section-content ${isOpen ? 'open' : ''}`}>
        <h2>My Socials</h2>
        <ul>
          <li>
            <a href='https://www.linkedin.com/in/vladislav-muzyka-9974a7213/'>LinkedIn</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Socials;
