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
              <Nav className="">
               <NavLink className="navbar__links" to="/aboutus">關於我們</NavLink>
              </Nav>
              <Nav className="m-auto">
                <NavLink className="navbar__links" to="/packagetour">套裝行程</NavLink>
                <NavLink className="navbar__links" to="/hotels">酒店</NavLink>
                <NavLink className="navbar__links" to="/golfcourse">球場</NavLink>
                <NavLink className="navbar__links" to="/restaurants">餐廳</NavLink>
                <NavLink className="navbar__links" to="/activities">娛樂活動</NavLink>
                <NavLink className="navbar__links" to="/attractions">景點</NavLink>
                <NavLink className="navbar__links" to="/attractions">旅游注意事項</NavLink>
              </Nav>
              <Nav className="">
              <NavLink className="navbar__links" to="/contact">聯絡我們</NavLink>
              </Nav>
          </Navbar.Collapse>
        </Navbar>
    </div>
    )
  }
}

export default NavbarComp;
