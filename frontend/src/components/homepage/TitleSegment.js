import React from 'react';
import ScrollArrow from '../ScrollArrow.js'
import '../../style/TitleSegment.css'; // Ensure the CSS file is updated accordingly

const TitleSegment = () => {
  return (
    <div className="title-segment-container">
      <div className="title-segment-image">
        <img src="/images/uladzislau_muzyka.png" alt="Vlad" />
      </div>
      <ScrollArrow />
      <div className="title-segment">
        <div className="title-segment-content">
          <h1>Vlad Muzyka</h1>
          <p>
            Hello and welcome to my portfolio! Please click on the segments below to learn more about me, or visit my accomplishments in the Events tab up above!
          </p>
        </div>
      </div>
    </div>
  );
};

export default TitleSegment;
