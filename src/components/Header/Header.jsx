import React from 'react'
import s from './Header.module.css'
import logo from '../../logo.svg'

const Header = () => {
   return (
      <header className={s.app_header}>
         <img src={logo} className="app-logo" alt="logo" />
      </header>
   )
}

export default Header