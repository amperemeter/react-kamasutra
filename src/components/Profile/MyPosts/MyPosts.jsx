import React from 'react';
import Post from './Posts/Post';
import s from './MyPosts.module.css';

const MyPosts = (props) => {

   let postElements = props.posts.map(p =>
      <Post key={p.id} message={p.message} likesCount={p.likesCount} />
   );

   let newPostElement = React.createRef();

   let onAddPost = () => {
      props.addPost();
   }

   let onPostChange = () => {
      let text = newPostElement.current.value;
      props.updateNewPostText(text);
   }

   return (
      <div className={s.posts}>
         <h3>My posts</h3>
         <div>
            <textarea
               ref={newPostElement}
               value={props.newPostText}
               onChange={onPostChange}
            />
         </div>
         <div>
            <button onClick={onAddPost}>Add post</button>
         </div>
         <div>
            New posts
            {postElements}
         </div>
      </div>

   )
}

export default MyPosts;