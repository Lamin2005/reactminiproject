import React, { useState } from 'react';
import '../index.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu-container">
      <div className="navbar">
       

        <div className="web-name">
        <img src="../logo192.png" alt="Rotating Image" className="rotate-img" />
        <h3>Mini Projects</h3>
        </div>

        <div
          className={`hamburger ${isOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <nav className={`menu ${isOpen ? 'show' : ''}`}>
        <ul>
          <li><NavLink className={({isActive})=> isActive ? "active" : "notactive"} to="/">Home</NavLink></li>
          <li><NavLink className={({isActive})=> isActive ? "active" : "notactive"} to="/store">Store App</NavLink></li>
          <li><NavLink className={({isActive})=> isActive ? "active" : "notactive"} to="/todolist">To Do List App</NavLink></li>
          <li><NavLink className={({isActive})=> isActive ? "active" : "notactive"} to="/calculator">Calculator</NavLink></li>
          <li><NavLink className={({isActive})=> isActive ? "active" : "notactive"} to="/theme">Color Switch</NavLink></li>
          <li><NavLink className={({isActive})=> isActive ? "active" : "notactive"} to="/dashboard">Dashboard</NavLink></li>
          <li><NavLink className={({isActive})=> isActive ? "active" : "notactive"} to="/login">Login</NavLink></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
