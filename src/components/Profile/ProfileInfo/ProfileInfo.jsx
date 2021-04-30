import React, { useState } from "react";
import style from "./ProfileInfo.module.css";
import userCover from "../../../assets/images/offset.jpg";
import userImg from "../../../assets/images/avatar.png";
import Preloader from "../../Common/Preloader";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm"

const ProfileInfo = ({ profile, isOwner, ...props }) => {
   const [editMode, setEditMode] = useState(false);

   if (!profile) {
      return <Preloader />
   }

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

         <div className={style.description}>
            <div>
               <img src={profile.photos.large || userImg} alt="" />
               {isOwner && (
                  <div><input type={"file"} onChange={onMainPhotoSelected} /></div>
               )}
            </div>

            {editMode
               ? <ProfileDataForm isOwner={isOwner} />
               : <ProfileData
                  profile={profile}
                  isOwner={isOwner}
                  goEditMode={() => setEditMode(true)}
                  {...props}
               />}

         </div>
      </div>
   )
}

const ProfileData = ({ profile, isOwner, goEditMode, ...props }) => {
   return <>
      {/* {isOwner && <div><button onClick={goEditMode}>Edit profile</button></div>} */}
      <div>
         <div>{profile.fullName}</div>
         <ProfileStatusWithHooks {...props} />
         <div>
            <b>About me</b>: {profile.aboutMe}
         </div>
         <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
         </div>
         {profile.lookingForAJob && <>
            <div>
               <b>My professional skills</b>: {profile.lookingForAJobDescription}
            </div>
            <div>
               <b>My contacts</b>: {Object.keys(profile.contacts).map(key => {
                  return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
               })}
            </div>
         </>
         }
      </div>
   </>
}

const Contact = ({ contactTitle, contactValue }) => {
   return <div className={style.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;