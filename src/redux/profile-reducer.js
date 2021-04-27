import { profileAPI } from "../api/api";
const UPDATE_NEW_POST_TEXT = 'profile/UPDATE_NEW_POST_TEXT';
const ADD_POST = 'profile/ADD_POST';
const DELETE_POST = 'profile/DELETE_POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'profile/SET_USER_STATUS';

let initialState = {
   posts: [
      { id: 1, message: 'It\'s my first post', likesCount: 0 },
      { id: 2, message: 'It\'s my second post', likesCount: 0 },
   ],
   newPostText: 'Wow!',
   profile: null,
   status: null,
}

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case UPDATE_NEW_POST_TEXT: {
         return {
            ...state,
            newPostText: action.newText,
         }
      }

      case ADD_POST: {
         let newPost = {
            id: state.posts.length + 1,
            message: state.newPostText,
            likesCount: 0,
         };
         return {
            ...state,
            posts: [...state.posts, newPost],
            newPostText: '',
         }
      }

      case DELETE_POST: {
         return {
            ...state,
            posts: state.posts.filter(p => p.id !== action.id)
         }
      }

      case SET_USER_PROFILE: {
         return {
            ...state,
            profile: action.profile,
         }
      }

      case SET_USER_STATUS: {
         return {
            ...state,
            status: action.status,
         }
      }

      default:
         return state;
   }
}

export const updateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const addPost = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status });
export const deletePost = (id) => ({ type: DELETE_POST, id });

export const getUserProfile = (userId) => (dispatch) => {
   profileAPI.getProfile(userId)
      .then(response => {
         dispatch(setUserProfile(response.data));
      });
}

export const getUserStatus = (userId) => (dispatch) => {
   profileAPI.getStatus(userId)
      .then(response => {
         dispatch(setUserStatus(response.data));
      });
}

export const updateUserStatus = (status) => (dispatch) => {
   profileAPI.updateStatus(status)
      .then(response => {
         if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status));
         }
      });
}

export default profileReducer;