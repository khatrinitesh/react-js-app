import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
  <div className="container px-5">
    <a className="navbar-brand" href="index.html">
      <span className="fw-bolder text-primary">Start Bootstrap</span>
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" href="index.html">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/resume" className="nav-link" href="resume.html">
            Resume
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/project" className="nav-link" href="projects.html">
            Projects
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link" href="contact.html">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}
