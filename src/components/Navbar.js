// src/components/Navbar.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Apply dark mode class to <body>
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <nav className="navbar">
      <h1 className="logo">My Portfolio</h1>

      {/* Desktop Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {/* Theme Toggle */}
      <button
        className="theme-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀️" : "🌙"}
      </button>

      {/* Hamburger Button */}
      <div
        className={`hamburger ${isOpen ? "toggle" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
