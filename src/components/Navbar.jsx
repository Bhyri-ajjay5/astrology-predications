import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className="custom-navbar">
      <div className="navbar-container">
        <button
          className="hamburger-btn"
          type="button"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          {open ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
        <Link className="navbar-brand" to="/" onClick={() => setOpen(false)}>
          Astrology Predictions
        </Link>
        <div className={`nav-menu ${open ? 'active' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" onClick={() => setOpen(false)} end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link" onClick={() => setOpen(false)}>
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/services" className="nav-link" onClick={() => setOpen(false)}>
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" onClick={() => setOpen(false)}>
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/enquiry" className="nav-link" onClick={() => setOpen(false)}>
                Enquiry
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
