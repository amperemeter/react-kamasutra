import { authAPI, profileAPI } from '../api/api';
import { setUserProfile, setUserStatus } from './profile-reducer';

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
   userId: null,
   email: null,
   login: null,
   isAuth: false
}

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER_DATA:
         return {
            ...state,
            ...action.data,
            isAuth: true,
         }
      default:
         return state;
   }
}

export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } });

export const getAuthUserData = () => (dispatch) => {
   let userId = null;
   authAPI.me()
      .then(response => {
         if (response.data.resultCode === 0) {
            let { id, email, login } = response.data.data;
            userId = response.data.data.id
            dispatch(setAuthUserData(id, email, login));
         }
      })
      .then(() => {
         profileAPI.getProfile(userId)
            .then(response => {
               dispatch(setUserProfile(response.data));
            });
      })
      .then(() => {
         profileAPI.getStatus(userId)
            .then(response => {
               dispatch(setUserStatus(response.data));
            });
      })
}

export default authReducer;