import React from "react";
import "./navBar.css";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <>
      <nav>
        <ul className="navbar-container">
          <li className="navbar-container__li">
            <Link to="top" spy={true} smooth={true} offset={50} duration={500}>
              Home
            </Link>
          </li>
          <li className="navbar-container__li">
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="navbar-container__li">
            <Link
              to="proyects"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Proyects
            </Link>
          </li>
          <li className="navbar-container__li">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={100}
              duration={500}
            >
              Contact me
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
