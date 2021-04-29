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
   console.log(profile);

   const onMainPhotoSelected = (e) => {
      if (e.target.files.length) {
         props.savePhoto(e.target.files[0]);
      }
   }

   return (
      <div>
         <div>
            <img src={userCover} alt="" />
         </div>

         <div className={s.description}>
            <div>
               <img src={profile.photos.large || userImg} alt="" />
               {props.isOwner && (
                  <div><input type={"file"} onChange={onMainPhotoSelected} /></div>
               )}
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