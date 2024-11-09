import React, { useState } from "react";
import "../style/Navbar.css"; // Import your CSS for styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Vlad Muzyka Portfilio</div>
      <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
      </ul>
      <div className="navbar-toggle" onClick={toggleMenu}>
      </div>
    </nav>
  );
};

export default Navbar;
