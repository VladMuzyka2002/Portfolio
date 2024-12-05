import React, { useEffect } from 'react';
import TitleSegment from '../components/homepage/TitleSegment';
import '../style/Home.css';
import AboutMe from '../components/homepage/AboutMe';

const Home = () => {
  useEffect(() => {
    const attachScrollFunctionality = () => {
      const boxes = document.querySelectorAll(".box");
      const boxHeight = window.innerHeight; // Height of each box is the height of the viewport
      const bufferZone = 300; // Adjust this value to increase/decrease the delay zone (in pixels)
      const totalScrollHeight = (boxes.length - 1) * (boxHeight + bufferZone); // Include buffer zones in total scroll height
  
      document.body.style.height = `${totalScrollHeight + window.innerHeight}px`; // Set the body height for scrolling
  
      const handleScroll = () => {
        const scrollPosition = window.scrollY; // Current scroll position
  
        boxes.forEach((box, index) => {
          const start = index * (boxHeight + bufferZone); // Starting position of the box
          const end = start + boxHeight; // Ending position of the box
  
          if (scrollPosition >= start && scrollPosition <= end) {
            // The current box is visible and starts moving upwards
            const progress = (scrollPosition - start) / boxHeight;
            box.style.transform = `translateY(-${progress * 100}vh)`;
          } else if (scrollPosition > end) {
            // Move the box completely out of the viewport
            box.style.transform = `translateY(-100vh)`;
          } else {
            // Reset box position to its original location
            box.style.transform = `translateY(0vh)`;
          }
        });
      };
  
      window.addEventListener("scroll", handleScroll);
  
      // Cleanup function to remove the event listener
      return () => window.removeEventListener("scroll", handleScroll);
    };
  
    attachScrollFunctionality();
  }, []);
  
  
  
// Empty dependency array ensures this runs once after the component mounts

  return (
    <div className="box-container">
      <div id="box1" className="box"><TitleSegment /></div>
      <div id="box2" className="box"><AboutMe/></div>
      <div id="box3" className="box"></div>
      <div id="box4" className="box"></div>
      <div id="box5" className="box"></div>
    </div>
  );
};

export default Home;
