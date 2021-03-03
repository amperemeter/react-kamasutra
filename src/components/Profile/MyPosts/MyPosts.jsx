import React from "react"
// import classes from './MyPosts.module.css'
import Post from "./Posts/Post"

const MyPosts = () => {
   return (
      <div>
         My posts
         <textarea cols="30" rows="10"></textarea>
         <button>Add post</button>
         <div>
            New posts
         </div>
         <Post message="Hi, how are you?" />
         <Post message="It's my first post" />
      </div>

   )
}

export default MyPosts