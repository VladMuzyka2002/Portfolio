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
          <h1>Vlad Muzyka's Portfolio</h1>
          <p>
          Hello and welcome to my portfolio! Please scroll down to see more about me, or swipe up if you are on a mobile device!
          </p>
        </div>
      </div>
    </div>
  );
};

export default TitleSegment;
