import React from 'react';
import s from './ProfileInfo.module.css';
import userCover from '../../../assets/images/offset.jpg';
import Preloader from '../../Common/Preloader';

const ProfileInfo = (props) => {
   if (!props.profile) {
      return <Preloader />
   }

   return (
      <div>
         <div>
            <img src={userCover} alt="" />
         </div>

         <div className={s.description}>
            <div>
               <img src={props.profile.photos.small} alt="" />
            </div>
            <div>{props.profile.fullName}</div>
            <div>{props.profile.aboutMe}</div>
            <div>{props.profile.contacts.github}</div>
         </div>
      </div>
   )
}

export default ProfileInfo