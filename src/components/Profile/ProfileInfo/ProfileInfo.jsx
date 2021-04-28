import React from "react";
import s from "./ProfileInfo.module.css";
import userCover from "../../../assets/images/offset.jpg";
import userImg from "../../../assets/images/avatar.png";
import Preloader from "../../Common/Preloader";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks"

const ProfileInfo = ({ profile, ...props }) => {
   if (!profile) {
      return <Preloader />
   }

   return (
      <div>
         <div>
            <img src={userCover} alt="" />
         </div>

         <div className={s.description}>
            <div>
               {profile.photos.small
                  ? <img src={profile.photos.small} alt="" />
                  : <img src={userImg} alt="" />
               }
            </div>
            <div>{profile.fullName}</div>
            <ProfileStatusWithHooks {...props} />
            <div>{profile.aboutMe}</div>
            <div>{profile.contacts.github}</div>
         </div>
      </div>
   )
}

export default ProfileInfo;