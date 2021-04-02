import React from "react";
import s from "./Users.module.css";
import userPhoto from '../../assets/images/avatar.png';
import { NavLink } from "react-router-dom";
import { followAPI, unfollowAPI } from '../../api/api';

let Users = (props) => {
   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
   let pages = [];
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
   }

   return (
      <div>
         <div className={s.pages}>
            {pages.map(p => {
               return <span key={p}
                  className={(props.currentPage === p) ? s.selected : ""}
                  onClick={(e) => { props.onPageChanged(p) }}
               > {p} </span>
            })}
         </div>
         {
            props.users.map(u => {
               return (
                  <div key={u.id} className={s.item}>

                     <div className={s.left}>
                        <NavLink to={'/profile/' + u.id}>
                           <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" className={s.image} />
                        </NavLink>
                        {!u.followed
                           ? <button
                              disabled={props.followingInProgress.some(id => id === u.id)}
                              onClick={() => {
                                 props.toggleFollowingProgress(true, u.id);
                                 followAPI.setFollow(u.id)
                                    .then(data => {
                                       if (data.resultCode === 0) {
                                          props.follow(u.id)
                                       }
                                       props.toggleFollowingProgress(false, u.id);
                                    })
                              }}>Follow</button>
                           : <button
                              disabled={props.followingInProgress.some(id => id === u.id)}
                              onClick={() => {
                                 props.toggleFollowingProgress(true, u.id);
                                 unfollowAPI.setUnollow(u.id)
                                    .then(data => {
                                       if (data.resultCode === 0) {
                                          props.unfollow(u.id)
                                       }
                                       props.toggleFollowingProgress(false, u.id);
                                    })
                              }}>Unfollow</button>
                        }

                     </div>

                     <div className={s.right}>
                        <div>
                           <div>{u.name}</div>
                           <div>{u.status}</div>
                        </div>
                        <div>
                           <div>{"u.location.country"}</div>
                           <div>{"u.location.city"}</div>
                        </div>
                     </div>

                  </div>
               )
            })
         }
      </div >
   )
}

export default Users;