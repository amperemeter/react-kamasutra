import React from "react"
import classes from './Menu.module.css'

const Menu = () => {
   return (
      <nav className={classes.app_menu}>
         <div>Profile</div>
         <div>Messages</div>
         <div>News</div>
         <div>Music</div>
         <div>Settings</div>
      </nav>
   )
}

export default Menu