import React from 'react';
import {Navbar, Nav, NavDropdown}  from 'react-bootstrap';
import './Navbar.scss';

import { NavLink } from 'react-router-dom';

function NavbarComp() {
  return (
    <div>
      <Navbar className="navbar" fill expand="lg">
        <NavLink to='/home'>PG Tour Logo</NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto ml-3">
                <NavLink className="ml-5 navbar__links" to="/packagetour"> </NavLink>
                <NavLink className="ml-5 navbar__links" to="/hotels">Hotels</NavLink>
                <NavLink className="ml-5 navbar__links" to="/golfcourse">Golf Course</NavLink>
                <NavLink className="ml-5 navbar__links" to="/Restaurants">Restaurants</NavLink>
                <NavLink className="ml-5 navbar__links" to="/Activities">Activities </NavLink>
                <NavLink className="ml-5 navbar__links" to="/Nightlife">Nightlife </NavLink>
              </Nav>

              <Nav className="mr-5">
                <NavLink className="ml-5 navbar__links" to="/aboutus">About Us</NavLink>
                  <NavLink className="ml-5 navbar__links" to="/contact">Contact</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
  );
}

export default NavbarComp;
