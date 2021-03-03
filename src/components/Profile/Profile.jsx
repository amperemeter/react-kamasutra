import React from "react"
import MyPosts from "./MyPosts/MyPosts"
import classes from './Profile.module.css'

const Profile = () => {
   return (
      <main className={classes.app_content}>
         <div>
            <img src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300" alt="" />
         </div>

         <div>
            avatar + description
         </div>

         <MyPosts />

      </main>

   )
}

export default Profile