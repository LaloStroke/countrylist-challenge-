import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar: React.FC = (): JSX.Element => {
  return (
    <header className="header">
      <nav className="header__nav">
        <Link className="header__nav__link" to="/">
          Where in the world?
        </Link>
        <button className="header__nav__button">
          <i className="fa-solid fa-moon"></i>Dark Mode
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
