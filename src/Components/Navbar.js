import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown}  from 'react-bootstrap';
import './Navbar.scss';

import { NavLink } from 'react-router-dom';

class NavbarComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollingLock: false
    }

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY > 234.25) {
      this.setState({
        scrollingLock: true
      });
    } else if (window.scrollY < 234.25) {
      this.setState({ scrollingLock: false
      });
    }
  }
  render() {
    return(
    <div>
      <NavLink className="logo" to='/'>
        <img src={require('../Images/logo.jpg')} alt="logo" />
      </NavLink>
      <Navbar style={{ position: this.state.scrollingLock ? "fixed" : "relative"}} className="navbar" fill expand="lg">
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto">
                <NavLink className="navbar__links" to="/packagetour">Package Tour </NavLink>
                <NavLink className="navbar__links" to="/hotels">Hotels</NavLink>
                <NavLink className="navbar__links" to="/golfcourse">Golf Courses</NavLink>
                <NavLink className="navbar__links" to="/restaurants">Restaurants</NavLink>
                <NavLink className="navbar__links" to="/activities">Activities</NavLink>
                <NavLink className="navbar__links" to="/attractions">Attractions</NavLink>
                <NavLink className="navbar__links" to="/contact">Contact</NavLink>
              </Nav>
          </Navbar.Collapse>
        </Navbar>
    </div>
    )
  }
}

export default NavbarComp;
