import React from "react"
// import classes from './MyPosts.module.css'
import Post from "./Posts/Post"
import s from './MyPosts.module.css'

const MyPosts = () => {
   return (
      <div className={s.posts}>
         <h3>My posts</h3>
         <div>
            <textarea cols="30" rows="10"></textarea>
         </div>
         <div>
            <button>Add post</button>
         </div>
         <div>
            New posts
         </div>
         <Post message="Hi, how are you?" />
         <Post message="It's my first post" />
      </div>

   )
}

export default MyPosts