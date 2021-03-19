import React from "react"
// import classes from './MyPosts.module.css'
import Post from "./Posts/Post"
import s from './MyPosts.module.css'

const MyPosts = (props) => {

   let postElements = props.posts.map(p =>
      <Post key={p.id} message={p.message} likesCount={p.likesCount} />
   );

   let newPost = React.createRef();

   let addPost = () => {
      debugger;
      props.addPost();
   }

   let onPostChange = () => {
      let text = newPost.current.value;
      props.updateNewPostText(text);
   }

   return (
      <div className={s.posts}>
         <h3>My posts</h3>
         <div>
            <textarea
               ref={newPost}
               value={props.newPostText}
               onChange={onPostChange}
            />
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