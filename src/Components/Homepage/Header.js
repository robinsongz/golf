import React from 'react';
import './Header.scss';

function Header() {
  return (
    <div className="header">
        <img src={require('../../Images/golf4.jpg')} alt="promotion" fluid />
    </div>
  );
}

export default Header;