import React from "react"
// import classes from './MyPosts.module.css'
import Post from "./Posts/Post"
import s from './MyPosts.module.css'

const MyPosts = (props) => {

   let postElements = props.state.map(p =>
      <Post key={p.id} message={p.message} likesCount={p.likesCount} />
   );

   let newPost = React.createRef();
   let addPost = () => {
      let text = newPost.current.value;
      props.addPost(text);
   }

   return (
      <div className={s.posts}>
         <h3>My posts</h3>
         <div>
            <textarea ref={newPost}></textarea>
         </div>
         <div>
            <button onClick={addPost}>Add post</button>
         </div>
         <div>
            New posts
            {postElements}
         </div>
      </div>

   )
}

export default MyPosts