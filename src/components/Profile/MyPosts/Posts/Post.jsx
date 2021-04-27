import React from 'react';
import s from './Post.module.css';
import userPhoto from '../../../../assets/images/avatar.png';


const Post = ({ message, likesCount }) => {

   return (
      <div className={s.item}>
         <img src={userPhoto} alt="" />
         <div>{message}</div>
         <div>
            <span>{likesCount}</span>
         </div>
      </div>
   )
}

export default Post;