import React from 'react';
import '../style/Title.css';
import ScrollArrow from '../components/ScrollArrow';

const Title = () => {
  return (
    <div className="title-container" style={{ position: 'relative' }}>
      {/* Left half with a large profile image */}
      <div className="title-left">
        <img
          src="/images/uladzislau_muzyka.png"
          alt="Profile"
          className="title-profile-image"
        />
      </div>

      {/* Right half with name at the top and description below */}
      <div className="title-right">
        <h1 className="title-name">Vlad Muzyka</h1>
        <p className="title-description">
          Hello and welcome to my portfolio! Please click on the segments
          below to learn more about me, or visit my accomplishments in the
          Events tab up above!
        </p>
      </div>

      <ScrollArrow /> {/* Add the arrow here */}
    </div>
  );
};

export default Title;




