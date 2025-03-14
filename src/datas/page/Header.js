import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../style/Header.css';

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div onClick={() => navigate("/")} className="navbar-brand">
        Siva | MERN Stack Developer
      </div>
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
      <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="/skills" onClick={() => setMenuOpen(false)}>Skills</Link></li>
        <li><Link to="/experience" onClick={() => setMenuOpen(false)}>Experience</Link></li>
        <li><Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
      </ul>
    </nav>
  );
};

export default Header;
