const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
   posts: [
      { id: 1, message: 'It\'s my first post', likesCount: 0 }
   ],
   newPostText: 'Wow!'
}

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST: {
         let newPost = {
            id: state.posts.length + 1,
            message: state.newPostText,
            likesCount: 0,
         };
         return {
            ...state,
            posts: [...state.posts, newPost],
            newPostText: ''
         }
      }

      case UPDATE_NEW_POST_TEXT: {
         return {
            ...state,
            newPostText: action.newText
         }
      }

      default:
         return state;
   }
}

export const addPost = () => ({ type: ADD_POST })

export const updateNewPostText = (text) => ({
   type: UPDATE_NEW_POST_TEXT,
   newText: text
})

export default profileReducer;