import React from "react"
import classes from './Post.module.css'

const Post = (props) => {

   return (
      <div className={classes.item}>
         <img src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/suicide_squad_woman_avatar_joker-256.png" alt="" />
         <div>{props.message}</div>
         <div>
            <span>{props.likesCount}</span>
         </div>
      </div>
   )
}

export default Post