import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <nav className="pt-navbar">
    <div className="pt-navbar-group pt-align-left" />
    <div className="pt-navbar-group pt-align-right" >
      <span className="pt-navbar-divider" />
      <NavLink to="/login"><button className="pt-button pt-minimal pt-icon-log-in" title="Log In" /></NavLink>
      <NavLink to="/register"><button className="pt-button pt-minimal pt-icon-add" title="Register" /></NavLink>
      <NavLink to="/logout"><button className="pt-button pt-minimal pt-icon-log-out" title="Log Out" /></NavLink>
    </div>
  </nav>
);

export default Header;
