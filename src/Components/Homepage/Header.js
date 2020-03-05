import React, { Component } from 'react';
import './Header.scss';

import Siema from 'siema';

class Header extends Component {

  prev = () => {
    this.siema.prev();
  };

  next = () => {
    this.siema.next();
  };

  componentDidMount() {
    this.siema = new Siema({
      duration: 1000,
      easing: 'ease-out',
      loop: true
    });

    // setInterval(() => this.siema.next(), 5000);
  }

  render() {
    return (
    <div className="header">
      <div className="siema">
          <div><img src="https://images.unsplash.com/photo-1532662362004-da35ea753120?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80" alt="Siema image" /></div>
          <div><img src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Siema image" /></div>
          <div><img src="https://images.unsplash.com/photo-1564424276928-e92dcd4309d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80" alt="Siema image" /></div>
          <div><img src="https://images.unsplash.com/photo-1433800881591-a31e7bff3f22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Siema image" /></div>
      </div>
        
          <button className="arrow left" onClick={this.prev}>
           </button>

       
          <button className="arrow right" onClick={this.next}>
          
          </button>
      
       
         
    </div>
  );
  }

}

export default Header;