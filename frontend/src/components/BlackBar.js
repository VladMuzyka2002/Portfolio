// BlackBar.js
import React, { useState, useEffect } from 'react';
import './BlackBar.css';

const BlackBar = () => {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const blackBarStyle = {
    transform: `translateY(${Math.min(scrollPos, 100)}px)`, // Moves the bar up as you scroll
  };

  return <div className="black-bar" style={blackBarStyle}></div>;
};

export default BlackBar;
