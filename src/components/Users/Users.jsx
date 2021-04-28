import React from "react";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";

let Users = (props) => {
   return (
      <div>
         <Paginator
            totalItemsCount={props.totalUsersCount}
            currentPage={props.currentPage}
            onPageChanged={props.onPageChanged}
            pageSize={props.pageSize}
         />
         {
            props.users.map(u => <User {...props} user={u} key={u.id} />)
         }
      </div >
   )
}

export default Users;