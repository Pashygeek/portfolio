import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from "../assets/portfolio.png";
import Contactimg from "../assets/contact-me.png";
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import "./navbar.css";

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <nav className='navbar'>
      <Link to="/">
        <img src={Logo} alt='logo' className='logo' />
      </Link>
      <div className='desktopMenu'>
        <NavLink className='desktopMenuListItem' to="/" activeClassName="activeLink">
          Home
        </NavLink>
        <NavLink className='desktopMenuListItem' to="/about" activeClassName="activeLink">
          About
        </NavLink>
        <NavLink className='desktopMenuListItem' to="/contact" activeClassName="activeLink">
          Contact
        </NavLink>
      </div>
      <DarkModeSwitch className='darkmode'
        onChange={toggleDarkMode}
        checked={isDarkMode}
        size={30}
      />
      <Link to="/contact">
        <button className='desktopMenuBtn'>
          <img src={Contactimg} alt='contact-me' className='desktopMenuImg' />
          Contact Me
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
