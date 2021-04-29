import { profileAPI } from "../api/api";
const UPDATE_NEW_POST_TEXT = 'profile/UPDATE_NEW_POST_TEXT';
const ADD_POST = 'profile/ADD_POST';
const DELETE_POST = 'profile/DELETE_POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'profile/SET_USER_STATUS';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';

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

      case SAVE_PHOTO_SUCCESS: {
         return {
            ...state,
            profile: { ...state.profile, photos: action.photos }
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
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos });


export const getUserProfile = (userId) => async (dispatch) => {
   let response = await profileAPI.getProfile(userId);
   dispatch(setUserProfile(response.data));
}

export const getUserStatus = (userId) => async (dispatch) => {
   let response = await profileAPI.getStatus(userId);
   dispatch(setUserStatus(response.data));
}

export const updateUserStatus = (status) => async (dispatch) => {
   let response = await profileAPI.updateStatus(status);
   if (response.data.resultCode === 0) {
      dispatch(setUserStatus(status));
   }
}

export const savePhoto = (file) => async (dispatch) => {
   let response = await profileAPI.savePhoto(file);
   if (response.data.resultCode === 0) {
      dispatch(savePhotoSuccess(response.data.data.photos));
   }
}

export default profileReducer;