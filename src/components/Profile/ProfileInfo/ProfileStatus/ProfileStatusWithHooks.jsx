import React, { useEffect, useState } from "react";
import style from "../../ProfileInfo/ProfileInfo.module.css";

const ProfileStatusWithHooks = (props) => {
   let [editModeStatus, setEditModeStatus] = useState(false);
   let [status, setStatus] = useState(props.status);

   useEffect(() => {
      setStatus(props.status);
   }, [props.status]);

   const deactivateEditMode = () => {
      setEditModeStatus(false);
      props.updateUserStatus(status)
   }

   return <>
      {!editModeStatus &&
         <span className={style.status} onClick={() => setEditModeStatus(true)}>{props.status || "no status"}</span>
      }

      {editModeStatus &&
         <input autoFocus={true} onBlur={deactivateEditMode} onChange={(e) => setStatus(e.target.value)} value={status || ""} type="text" />
      }
   </>
}

export default ProfileStatusWithHooks;