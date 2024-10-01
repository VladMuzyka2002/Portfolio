import React, { useState } from 'react';
import '../style/Home.css';
import AboutMe from '../components/infoBars/AboutMe';
import Education from '../components/infoBars/Education';
import Skills from '../components/infoBars/Skills';
import Socials from '../components/infoBars/Socials';

const Home = () => {
  const [openSections, setOpenSections] = useState({
    about: false,
    education: false,
    skills: false,
    socials: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="home-container">
      <div className="home-header">
        <img
          src="/images/uladzislau_muzyka.png"
          alt="Profile"
          className="profile-image"
        />
        <div className="home-summary">
          <h1>Vlad Muzyka</h1>
            <p>
                Hello and welcome to my portfolio! Please click on the segments below to learn more about me, or visit my accomplishments in the Events tab up above!
            </p>

        </div>
      </div>

      {/* Use Section Components */}
      <AboutMe isOpen={openSections.about} toggle={() => toggleSection('about')} />
      <Education isOpen={openSections.education} toggle={() => toggleSection('education')} />
      <Skills isOpen={openSections.skills} toggle={() => toggleSection('skills')} />
      <Socials isOpen={openSections.socials} toggle={() => toggleSection('socials')} />
    </div>
  );
};

export default Home;
