import React from "react";
import { Link } from "react-router-dom";

import "./styles/navbar.css";

const NavBar = (props) => {
  const { active } = props;

  return (
    <>
      <div className="nav-wrapper">
        <div className="nav-container">
          <nav className="navbar">
            <div className="nav-bg">
              <ul className="nav">
                <li
                  className={active === "home" ? "nav-item active" : "nav-item"}
                >
                  <Link to="/">Home</Link>
                </li>
                <li
                  className={
                    active === "about" ? "nav-item active" : "nav-item"
                  }
                >
                  <Link to="/about">About</Link>
                </li>
                <li
                  className={
                    active === "projects" ? "nav-item active" : "nav-item"
                  }
                >
                  <Link to="/projects">Projects</Link>
                </li>
                <li
                  className={
                    active === "contact" ? "nav-item active" : "nav-item"
                  }
                >
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavBar;
