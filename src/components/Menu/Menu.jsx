import React from "react"
import { NavLink } from "react-router-dom"
import classes from './Menu.module.css'

const Menu = () => {
   return (
      <nav className={classes.app_menu}>
         <div className={classes.item}>
            <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
         </div>
         <div className={classes.item}>
            <NavLink to="/dialogs" activeClassName={classes.active}>Dialogs</NavLink>
         </div>
         <div className={classes.item} >
            <div>News</div>
         </div>
         <div className={classes.item} >
            <div>Music</div>
         </div>
         <div className={classes.item}>
            <div>Settings</div>
         </div>
      </nav>
   )
}

export default Menu