import React from 'react';
import {NavLink} from 'react-router-dom'

const Navbar = () =>
  <div>
    <NavLink exact to='/' className="navlink" activeClassName='activeNavlink'> Home</NavLink>
    <NavLink to='/about' className="navlink" activeClassName='activeNavlink'> About</NavLink>
    <NavLink to='/surfboards' className="navlink" activeClassName='activeNavlink'> Surfboards</NavLink>
  </div>;

export default Navbar;
