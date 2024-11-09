import React, { useEffect, useState } from 'react';
import '../style/Home.css';
import AboutMe from '../components/infoBars/AboutMe';
import Education from '../components/infoBars/Education';
import Skills from '../components/infoBars/Skills';
import Socials from '../components/infoBars/Socials';
import Title from '../components/Title';


const Home = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Trigger animation shortly after component mounts (optional for initial load animation)
    const timer = setTimeout(() => setIsAnimating(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`home-container ${isAnimating ? 'slide-down' : ''}`}>
      <Title />
      {/* Brochure-style layout: All sections always visible */}
      <div className="brochure-sections">
        <AboutMe />
        <Education />
        <Skills />
        <Socials />
      </div>
    
    </div>
  );
};

export default Home;
