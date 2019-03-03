import React from 'react';

import HeaderMenu from '../HeaderMenu';
import UserMenu from '../UserMenu';

import './style.css';

import logo from '../../assets/images/logo.svg'; 

const Header = () => (
  <div className="header-wrapper">
    <div className="header">
      <img alt='' src={logo} />
      <div className="header-menu-wrap">
        <HeaderMenu />
        <UserMenu />
      </div>
    </div>
  </div>
);

export default Header;