import React from 'react';
import {Navbar, Nav, NavDropdown}  from 'react-bootstrap';
import './Navbar.scss';

import { NavLink } from 'react-router-dom';

function NavbarComp() {
  return (
    <div>
      <NavLink className="logo" to='/'>
        <img src={require('../Images/logo.jpg')} alt="logo" />
      </NavLink>
      <Navbar className="navbar" fill expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto">
                <NavLink className="navbar__links" to="/packagetour">Package Tour </NavLink>
                <NavLink className="navbar__links" to="/hotels">Hotels</NavLink>
                <NavLink className="navbar__links" to="/golfcourse">Golf Courses</NavLink>
                <NavLink className="navbar__links" to="/Restaurants">Restaurants</NavLink>
                <NavLink className="navbar__links" to="/Activities">Activities </NavLink>
                <NavLink className="navbar__links" to="/Nightlife">Nightlife </NavLink>
                <NavLink className="navbar__links" to="/Activities">About Us </NavLink>
                <NavLink className="navbar__links" to="/Nightlife">Contact </NavLink>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
  );
}

export default NavbarComp;
