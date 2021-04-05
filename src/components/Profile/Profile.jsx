import React from 'react';
import { Redirect } from 'react-router';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
   if (!props.isAuth) return <Redirect to={"/login"} />

   return (
      <div>
         <ProfileInfo profile={props.profile} />
         <MyPostsContainer />
      </div>
   )
}

export default Profile;