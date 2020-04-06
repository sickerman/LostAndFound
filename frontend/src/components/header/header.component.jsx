import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = () => (
  <div className='header'>
    <div className='logo-container'>
      <Link className='logo-name' to='/'>
        <Logo className='logo' />
        LOST AND FOUND
      </Link>
    </div>
    <div className='options'>
      <Link className='option' to='/add'>
        ADD
      </Link>
      <Link className='option' to='/edit'>
        EDIT
      </Link>
      <Link className='option' to='/delete'>
        DELETE
      </Link>
    </div>
  </div>
);

export default Header;
