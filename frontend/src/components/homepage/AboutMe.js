import React, { useState } from 'react';
import '../../style/AboutMe.css'; // Ensure the CSS file is updated accordingly
import MyBackground from './AboutMe/MyBackground';
import MyEfforts from './AboutMe/MyEfforts';
import MyGoals from './AboutMe/MyGoals';

function AboutMe() {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    <div className="container">
      <div className="left">
        <h1>About Me</h1>
        <div 
          className="button-section"
          onMouseEnter={() => setActiveComponent(<MyBackground />)}
          onMouseLeave={() => setActiveComponent(null)}
        >
          <img src="images/gradient1.jpg" alt="Button 1" />
          <div className="button-text">My Biography</div>
        </div>
        <div 
          className="button-section"
          onMouseEnter={() => setActiveComponent(<MyEfforts />)}
          onMouseLeave={() => setActiveComponent(null)}
        >
          <img src="images/gradient2.jpg" alt="Button 2" />
          <div className="button-text">My Efforts</div>
        </div>
        <div 
          className="button-section"
          onMouseEnter={() => setActiveComponent(<MyGoals />)}
          onMouseLeave={() => setActiveComponent(null)}
        >
          <img src="images/gradient3.jpg" alt="Button 3" />
          <div className="button-text">My Goals</div>
        </div>
      </div>
      <div className="right">
      <div className="info-text">
          Please hover over the sections to the left to learn more about me
        </div>
        <div className={`slider ${activeComponent ? 'visible' : ''}`}>
          {activeComponent}
        </div>
      </div>
      
    </div>
  );
}

export default AboutMe;
