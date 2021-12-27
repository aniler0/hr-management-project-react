import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./styles.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__Container">
        <Link to="/">
          <h1>HRManagement</h1>
        </Link>
        <span className="link__Wrapper">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/candidates">
            Candidates
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "active" : "inactive")} to="/about">
            About
          </NavLink>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
