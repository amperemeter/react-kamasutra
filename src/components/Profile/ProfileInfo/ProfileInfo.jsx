import React from "react";
import s from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/avatar.png'

const ProfileInfo = () => {
   return (
      <div>

         <div>
            <img src={userPhoto} alt="" />
         </div>

         <div className={s.description}>
            avatar + description
         </div>

      </div>
   )
}

export default ProfileInfo