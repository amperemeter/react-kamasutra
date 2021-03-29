import React from "react"
import s from './Post.module.css';
import userPhoto from '../../../../assets/images/avatar.png'


const Post = (props) => {

   return (
      <div className={s.item}>
         <img src={userPhoto} alt="" />
         <div>{props.message}</div>
         <div>
            <span>{props.likesCount}</span>
         </div>
      </div>
   )
}

export default Post