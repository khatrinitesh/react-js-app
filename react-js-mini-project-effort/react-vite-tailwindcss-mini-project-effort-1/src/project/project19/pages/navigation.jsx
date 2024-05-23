import React from "react";
import { NavLink } from "react-router-dom";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            React Landing Page
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <NavLink to="/features" className="page-scroll">
                Features
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="page-scroll">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="page-scroll">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" className="page-scroll">
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to="/testimonials" className="page-scroll">
                Testimonials
              </NavLink>
            </li>
            <li>
              <NavLink to="/team" className="page-scroll">
                Team
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="page-scroll">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};