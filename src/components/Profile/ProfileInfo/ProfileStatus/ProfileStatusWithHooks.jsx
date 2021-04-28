import React, { useEffect, useState } from "react";

const ProfileStatusWithHooks = (props) => {
   let [editMode, setEditMode] = useState(false);
   let [status, setStatus] = useState(props.status);

   useEffect(() => {
      setStatus(props.status);
   }, [props.status]);

   const deactivateEditMode = () => {
      setEditMode(false);
      props.updateUserStatus(status)
   }

   return <>
      {!editMode &&
         <span onClick={() => setEditMode(true)}>{props.status || "no status"}</span>
      }

      {editMode &&
         <input autoFocus={true} onBlur={deactivateEditMode} onChange={(e) => setStatus(e.target.value)} value={status || ""} type="text" />
      }
   </>
}

export default ProfileStatusWithHooks;