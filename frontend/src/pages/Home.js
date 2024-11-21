import React, { useEffect } from 'react';
import TitleSegment from '../components/homepage/TitleSegment';
import '../style/Home.css';

const Home = () => {
  useEffect(() => {
    const attachScrollFunctionality = () => {
      const boxes = document.querySelectorAll(".box");
      const boxHeight = window.innerHeight; // Height of each box is the height of the viewport
      const totalScrollHeight = (boxes.length - 1) * boxHeight; // Total scroll height based on the number of boxes

      document.body.style.height = `${totalScrollHeight + window.innerHeight}px`; // Set the body height for scrolling

      const handleScroll = () => {
        const scrollPosition = window.scrollY; // Current scroll position

        boxes.forEach((box, index) => {
          const start = index * boxHeight; // Starting position of the box
          const end = (index + 1) * boxHeight; // Ending position of the box

          if (scrollPosition >= start && scrollPosition <= end) {
            // Calculate progress and shrink the box from the bottom up
            const progress = (scrollPosition - start) / boxHeight;
            box.style.height = `${(1 - progress) * 100}vh`;
          } else if (scrollPosition > end) {
            // Shrink the box completely if we're past the box
            box.style.height = `0vh`;
          } else {
            // Keep the box full size if we're before its start
            box.style.height = `100vh`;
          }
        });
      };

      window.addEventListener("scroll", handleScroll);

      // Cleanup function to remove the event listener
      return () => window.removeEventListener("scroll", handleScroll);
    };

    attachScrollFunctionality();
  }, []); // Empty dependency array ensures this runs once after the component mounts

  return (
    <div className="box-container">
      <div id="box1" className="box"><TitleSegment /></div>
      <div id="box2" className="box"></div>
      <div id="box3" className="box"></div>
      <div id="box4" className="box"></div>
      <div id="box5" className="box"></div>
    </div>
  );
};

export default Home;
