// ScrollArrow.js
import React, { useState, useEffect } from 'react';
import '../style/ScrollArrow.css'; // Keep the styles for the arrow.

const ScrollArrow = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  // This effect will track scroll position and update state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsAtTop(true); // Show large when at the top
      } else {
        setIsAtTop(false); // Shrink and hide when scrolling down
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Initial check in case the page loads not at the top
    handleScroll();

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`scroll-arrow ${isAtTop ? 'visible' : 'invisible'}`}
      role="button"
      aria-label="Scroll down"
    >
      <img src="/images/downarrow.png" alt="Scroll Down" />
    </div>
  );
};

export default ScrollArrow;
