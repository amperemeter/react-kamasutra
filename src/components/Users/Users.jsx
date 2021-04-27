import React from "react";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";

let Users = (props) => {
   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
   let pages = [];
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
   }

   return (
      <div>
         <Paginator
            currentPage={props.currentPage}
            onPageChanged={props.onPageChanged}
            totalUsersCount={props.totalUsersCount}
            pageSize={props.pageSize}
         />
         {
            props.users.map(u => <User {...props} user={u} key={u.id} />)
         }
      </div >
   )
}

export default Users;