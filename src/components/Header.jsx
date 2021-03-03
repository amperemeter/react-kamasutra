import React from "react"
import './Header.css'
import logo from '../logo.svg';

const Header = () => {
   return (
      <header className="app-header">
         <img src={logo} className="app-logo" alt="logo" />
      </header>
   )
}

export default Header