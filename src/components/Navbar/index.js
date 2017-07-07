import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () =>
  <div>

      <NavLink
      exact
      className="navlink"
      activeClassName="activeNavlink"
      to="/">
      home
      </NavLink>

      <NavLink
        className="navlink"
        activeClassName="activeNavlink"
        to="/about"
        >about
       </NavLink>

      <NavLink
      exact
      className="navlink"
      activeClassName="activeNavlink"
      to="/surfboards">
      surfboards
      </NavLink>



  </div>

export default Navbar;
