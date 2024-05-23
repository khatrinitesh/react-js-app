import React from 'react';
import Logo from '../images/logo.png'
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header className="header_section">
        <div className="container">
            <nav className="navbar navbar-expand-lg custom_nav-container ">
            <a className="navbar-brand" href="index.html">
                <img src={Logo} alt="" />
                <span>Electrochip</span>
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="s-1"> </span>
                <span className="s-2"> </span>
                <span className="s-3"> </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                <ul className="navbar-nav  ">
                    <li className="nav-item active">
                    <NavLink to="/" className="nav-link" href="index.html">
                        Home <span className="sr-only">(current)</span>
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="/about" className="nav-link" href="about.html">
                        {" "}
                        About
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="/service" className="nav-link" href="service.html">
                        {" "}
                        Service{" "}
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="/blog" className="nav-link" href="blog.html">
                        {" "}
                        Blog{" "}
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="/contact" className="nav-link" href="contact.html">
                        Contact{" "}
                    </NavLink>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
    </header>

    </>
  )
}
