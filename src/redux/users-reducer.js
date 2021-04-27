import { usersAPI } from '../api/api';
import { updateObjectInArray } from '../utils/object-helpers';

// const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_USERS = 'users/SET_USERS';
const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
   users: [],
   pageSize: 6,
   totalUsersCount: 60,
   currentPage: 1,
   isFetching: true,
   followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
   switch (action.type) {
      // case SET_TOTAL_USERS_COUNT:
      // return { ...state, totalUsersCount: tion.totalUsersCount }

      case SET_USERS:
         return {
            ...state,
            users: action.users
         }

      case FOLLOW:
         return {
            ...state,
            users: updateObjectInArray(state.users, action.userID, "id", { followed: true }),
         }

      case UNFOLLOW:
         return {
            ...state,
            users: updateObjectInArray(state.users, action.userID, "id", { followed: false }),
         }

      case SET_CURRENT_PAGE:
         return { ...state, currentPage: action.currentPage }

      case TOGGLE_IS_FETCHING:
         return { ...state, isFetching: action.isFetching }

      case TOGGLE_IS_FOLLOWING_PROGRESS:
         return {
            ...state,
            followingInProgress: action.isFetching
               ? [...state.followingInProgress, action.userId]
               : state.followingInProgress.filter(id => id !== action.userId)
         }

      default:
         return state;
   }
}

// export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const followSuccess = (userID) => ({ type: FOLLOW, userID });
export const unfollowSuccess = (userID) => ({ type: UNFOLLOW, userID });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });

export const requestUsers = (page, pageSize) => {
   return async (dispatch) => {
      dispatch(toggleIsFetching(true));
      dispatch(setCurrentPage(page));
      let response = await usersAPI.getUsers(page, pageSize);
      // dispatch(setTotalUsersCount(response.data.totalCount));
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(response.data.items));
   }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
   dispatch(toggleFollowingProgress(true, userId));
   let response = await apiMethod(userId);
   if (response.data.resultCode === 0) {
      dispatch(actionCreator(userId));
   }
   dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId) => {
   return (dispatch) => {
      followUnfollowFlow(dispatch, userId, usersAPI.follow, followSuccess)
   }
}

export const unfollow = (userId) => {
   return (dispatch) => {
      followUnfollowFlow(dispatch, userId, usersAPI.unfollow, unfollowSuccess)
   }
}

export default usersReducer;