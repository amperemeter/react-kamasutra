import { addPost, updateNewPostText } from "../../../redux/profile-reducer";
import { connect } from 'react-redux';

import MyPosts from "./MyPosts"

let mapStateToProps = (state) => {
   return {
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText
   }
}

// let mapDispatchToProps = (dispatch) => {
//    return {
//       updateNewPostText: (text) => {
//          let action = updateNewPostText(text);
//          dispatch(action);
//       },
//       addPost: () => {
//          dispatch(addPost());
//       }
//    }
// }

const MyPostsContainer = connect(mapStateToProps, {
   updateNewPostText,
   addPost
})(MyPosts);

export default MyPostsContainer;