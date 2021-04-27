import React from 'react';
import s from './Header.module.css';
import logo from '../../logo.svg';
import { NavLink } from 'react-router-dom';

const Header = ({ login, isAuth }) => {
   return (
      <header className={s.app_header}>
         <img src={logo} className="app-logo" alt="logo" />
         <div className={s.login_block}>
            {isAuth
               ? <span>{login}</span>
               : <NavLink to={'/login'}>Login</NavLink>
            }
         </div>
      </header>
   )
}

export default Header;