import React from "react"
import classes from './Post.module.css'

const Post = () => {
   return (
      <div className={classes.item}>
         <img src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/suicide_squad_woman_avatar_joker-256.png" alt="" />
         Post 1

         <div>
            <span>Like</span>
         </div>
      </div>
   )
}

export default Post