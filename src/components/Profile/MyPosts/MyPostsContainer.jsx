import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import { connect } from 'react-redux';

import MyPosts from "./MyPosts"

let mapStateToPops = (state) => {
   return {
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      updateNewPostText: (text) => {
         let action = updateNewPostTextActionCreator(text);
         dispatch(action);
      },
      addPost: () => {
         dispatch(addPostActionCreator());
      }
   }
}

const MyPostsContainer = connect(mapStateToPops, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;