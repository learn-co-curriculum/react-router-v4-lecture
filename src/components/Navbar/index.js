import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => 
  <div>
    <NavLink 
      exact
      className="navlink"
      activeClassName="activeNavlink"
      to="/"
    >
      Home
    </NavLink>
    <NavLink 
      className="navlink"
      activeClassName="activeNavlink"
      to="/surfboards"
    >
      Surfboards
    </NavLink>
    <NavLink 
      className="navlink"
      activeClassName="activeNavlink"
      to="/about"
    >
      About
    </NavLink>
  </div>;

export default Navbar;