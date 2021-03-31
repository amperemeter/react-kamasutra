import React from 'react';
import s from './Header.module.css';
import logo from '../../logo.svg';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
   return (
      <header className={s.app_header}>
         <img src={logo} className="app-logo" alt="logo" />
         <div className={s.login_block}>
            {props.isAuth
               ? <span>{props.login}</span>
               : <NavLink to={'/login'}>Login</NavLink>
            }
         </div>
      </header>
   )
}

export default Header;