import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../store/storeProvider";
import { StoreActionTypes } from "../../store/storeReducer";
import "./navbar.css";

const Navbar: React.FC = (): JSX.Element => {
  const [store, dispatch] = useContext(StoreContext);

  const handleDarkMode = (): void => {
    dispatch({ type: StoreActionTypes.SET_DARK_MODE, payload: !store.darkMode });
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <Link className="header__nav__link" to="/">
          Where in the world?
        </Link>
        <button onClick={handleDarkMode} className="header__nav__button">
          {store.darkMode ? (
            <i className="fa-solid fa-sun"></i>
          ) : (
            <i className="fa-solid fa-moon"></i>
          )}
          {store.darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
