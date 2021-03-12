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
            <NavLink to="/messages" activeClassName={classes.active}>Messages</NavLink>
         </div>
         <div className={classes.item} activeClassName={classes.active}>
            <div>News</div>
         </div>
         <div className={classes.item} activeClassName={classes.active}>
            <div>Music</div>
         </div>
         <div className={classes.item} activeClassName={classes.active}>
            <div>Settings</div>
         </div>
      </nav>
   )
}

export default Menu