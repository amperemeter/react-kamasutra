import React from "react";


const ProfileDataForm = ({ isOwner }) => {
   return <>
      {isOwner && <div><button onClick={() => { }}>Save</button></div>}
   </>
}

export default ProfileDataForm;