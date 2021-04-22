import React, { useState } from "react";

const ProfileStatusWithHooks = (props) => {

   let [editMode, setEditMode] = useState(false);
   let [status, setStatus] = useState(props.status);

   const deactivateEditMode = () => {
      setEditMode(false);
      props.updateUserStatus(status)
   }

   return <>
      {!editMode &&
         <div>
            <span onClick={() => setEditMode(true)}>{props.status || "no status"}</span>
         </div>
      }

      {editMode &&
         <div>
            <input autoFocus={true} onBlur={deactivateEditMode} onChange={(e) => setStatus(e.target.value)} value={status || ""} type="text" />
         </div>
      }
   </>
}

export default ProfileStatusWithHooks;