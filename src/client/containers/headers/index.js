import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <nav className="pt-navbar">
    <div className="pt-navbar-group pt-align-left" />
    <div className="pt-navbar-group pt-align-right" >
      <span className="pt-navbar-divider" />
      <NavLink to="/login"><button className="pt-button pt-minimal pt-icon-log-in" /></NavLink>
      <NavLink to="/register"><button className="pt-button pt-minimal pt-icon-download" /></NavLink>
    </div>
  </nav>
);

export default Header;
