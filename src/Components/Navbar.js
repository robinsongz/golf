import React from 'react';
import {Navbar, Nav, NavDropdown}  from 'react-bootstrap';
import './Navbar.scss';

function NavbarComp() {
  return (
    <div>
      <Navbar fill bg="light" expand="lg">
        <Navbar.Brand href="#home">Richard Sung Golf Tours</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto ml-3">
                <Nav.Link className="ml-5" href="#home">Home</Nav.Link>
                <Nav.Link className="ml-5" href="#link">Link</Nav.Link>
                  <NavDropdown className="ml-5" title="Dropdown" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  </NavDropdown>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
  );
}

export default NavbarComp;
