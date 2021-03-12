import React from "react"
// import classes from './MyPosts.module.css'
import Post from "./Posts/Post"
import s from './MyPosts.module.css'

const MyPosts = (props) => {

   let postElements = props.state.map(p =>
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