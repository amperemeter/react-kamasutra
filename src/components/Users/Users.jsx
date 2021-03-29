import React from "react";
import s from "./Users.module.css";
import * as axios from 'axios';
import userPhoto from '../../assets/images/avatar.png';

class Users extends React.Component {
   constructor(props) {
      super(props);

      axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
         this.props.setUsers(response.data.items);
      })
   }

   render() {
      return (
         <div>
            {
               this.props.users.map(u => {
                  return (
                     <div key={u.id} className={s.item}>

                        <div className={s.left}>
                           <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" className={s.image} />
                           {!u.followed
                              ? <button onClick={() => { this.props.follow(u.id) }}>Follow</button>
                              : <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                           }

                        </div>

                        <div className={s.right}>
                           <div>
                              <div>{u.fullName}</div>
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
         </div>
      )
   }
}

export default Users;