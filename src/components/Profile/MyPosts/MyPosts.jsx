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
         <Post />
         <Post />
         <Post />
      </div>

   )
}

export default MyPosts