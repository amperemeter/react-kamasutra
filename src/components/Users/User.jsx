import React from "react";
import s from "./Users.module.css";
import userPhoto from '../../assets/images/avatar.png';
import { NavLink } from "react-router-dom";

let User = ({ user, ...props }) => {
   return (
      <div className={s.item}>
         <div className={s.left}>
            <NavLink to={`/profile/${user.id}`}>
               <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="" className={s.image} />
            </NavLink>
            {user.followed
               ? <button
                  disabled={props.followingInProgress.some(id => id === user.id)}
                  onClick={() => { props.unfollow(user.id) }}>
                  Unfollow
                              </button>

               : <button
                  disabled={props.followingInProgress.some(id => id === user.id)}
                  onClick={() => { props.follow(user.id); }}>
                  Follow
               </button>
            }
         </div>

         <div className={s.right}>
            <div>
               <div>{user.name}</div>
               <div>{user.status}</div>
            </div>
            <div>
               <div>{"user.location.country"}</div>
               <div>{"user.location.city"}</div>
            </div>
         </div>
      </div>
   )
}

export default User;