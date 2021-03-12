import React from "react"
// import classes from './MyPosts.module.css'
import Post from "./Posts/Post"
import s from './MyPosts.module.css'

const MyPosts = () => {

   let postsData = [
      { id: 1, message: 'Hi, how are you?', likesCount: 12 },
      { id: 2, message: 'It\'s my first post', likesCount: 0 }
   ]

   let postElements = postsData.map(p =>
      <Post key={p.id} message={p.message} likesCount={p.likesCount} />
   );

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
            {postElements}
         </div>
      </div>

   )
}

export default MyPosts