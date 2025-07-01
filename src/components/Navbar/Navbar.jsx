import React, { useContext, useState, useEffect } from 'react';
import './Navbar.css';
import { assets } from '../../assets/frontend_assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getCartTotalAmount } = useContext(StoreContext);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for the 'dark-mode' class on <body>
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.body.classList.contains('dark-mode'));
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class'],
    });

    // Set initial mode
    setIsDarkMode(document.body.classList.contains('dark-mode'));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="navbar">
      <Link to="/"><img src={assets.logo} alt="Logo" className="logo" /></Link>

      <ul className="navbar-menu">
        <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
        <a href="#explore-menu" onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
        <a href="#app-download" onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
        <a href="#footer" onClick={() => setMenu("contact us")} className={menu === "contact us" ? "active" : ""}>contact us</a>
      </ul>

      <div className="navbar-right">
        <img
          src={isDarkMode ? assets.search_darkmode : assets.search_icon}
          alt="Search"
          className="navbar-icon"
        />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img
              src={isDarkMode ?  assets.basket_darkmode : assets.basket_icon}
              alt="Basket"
              className="navbar-icon"
            />
          </Link>
          <div className={getCartTotalAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
