import profileReducer, { addPost, updateNewPostText, deletePost } from "./profile-reducer";

let state = {
   posts: [
      { id: 1, message: 'It\'s my first post', likesCount: 0 },
   ],
   newPostText: '',
}

it('new post should be added', () => {
   let action = () => {
      updateNewPostText("Hello!")
      addPost();
   }
   let newState = profileReducer(state, action);
   expect(newState.posts.length).toBe(2);
});


it('after deleting length of messages should be added decrement', () => {
   let action = deletePost(1);
   let newState = profileReducer(state, action);
   expect(newState.posts.length).toBe(0);
});