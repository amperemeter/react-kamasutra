import React from "react"
import { NavLink } from "react-router-dom"
import s from './Menu.module.css'

const Menu = () => {
   return (
      <nav className={s.app_menu}>
         <div className={s.item}>
            <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
         </div>
         <div className={s.item}>
            <NavLink to="/dialogs" activeClassName={s.active}>Dialogs</NavLink>
         </div>
         <div className={s.item} >
            <div>News</div>
         </div>
         <div className={s.item} >
            <div>Music</div>
         </div>
         <div className={s.item}>
            <div>Settings</div>
         </div>
      </nav>
   )
}

export default Menu