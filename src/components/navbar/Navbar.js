import React, { useState } from 'react';
import './navbar.css';
import { slide as Menu } from 'react-burger-menu';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const nottoggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <nav className="navbar">
      <div id="drawer" className={`drawer ${isDrawerOpen ? 'open' : ''}`}>
        <h2 onClick={nottoggleDrawer}>Drawer Menu</h2>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        
      </div>

      <div className="main-content">
          
          <div class="hamburger-menu" onClick={toggleDrawer}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          
      </div>

      <a href="/">
        <img
          className="imgd"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
          alt=""
        />
      </a>
      <div class="search-container">
        <input type="text" placeholder="Search..."/>
        <button type="submit">🔍</button>
    </div>
    </nav>
  );
};

export default Navbar;
