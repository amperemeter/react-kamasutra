import React from "react";
import s from "./Users.module.css";
import * as axios from 'axios';
import userPhoto from '../../assets/images/avatar.png';

class Users extends React.Component {
   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
         this.props.setUsers(response.data.items);
         // this.props.setTotalUsersCount(response.data.totalCount);
      })
   }

   onPageChanged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
         this.props.setUsers(response.data.items);
      })
   }

   render() {

      let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
      let pages = [];
      for (let i = 1; i <= pagesCount; i++) {
         pages.push(i);
      }

      return (
         <div>
            <div className={s.pages}>
               {pages.map(p => {
                  return <span key={p}
                     className={(this.props.currentPage === p) ? s.selected : ""}
                     onClick={(e) => { this.onPageChanged(p) }}
                  > {p} </span>
               })}
            </div>
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
         </div>
      )
   }
}

export default Users;