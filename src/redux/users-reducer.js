import { usersAPI } from '../api/api';

// const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
   users: [],
   pageSize: 4,
   totalUsersCount: 20,
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
            users: state.users.map(u => {
               if (u.id === action.userID) {
                  return { ...u, followed: true };
               }
               return u;
            })
         }

      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userID) {
                  return { ...u, followed: false };
               }
               return u;
            })
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

export const getUsers = (currentPage, pageSize) => {
   return (dispatch) => {
      toggleIsFetching(true);

      usersAPI.getUsers(currentPage, pageSize).then(data => {
         // dispatch(setTotalUsersCount(data.totalCount));
         dispatch(toggleIsFetching(false));
         dispatch(setUsers(data.items));
      })
   }
}


export const follow = (userId) => {
   return (dispatch) => {
      dispatch(toggleFollowingProgress(true, userId));
      usersAPI.follow(userId)
         .then(response => {
            if (response.data.resultCode === 0) {
               dispatch(followSuccess(userId));
            }
            dispatch(toggleFollowingProgress(false, userId));
         })
   }
}

export const unfollow = (userId) => {
   return (dispatch) => {
      dispatch(toggleFollowingProgress(true, userId));
      usersAPI.unfollow(userId)
         .then(response => {
            if (response.data.resultCode === 0) {
               dispatch(unfollowSuccess(userId));
            }
            dispatch(toggleFollowingProgress(false, userId));
         })
   }
}

export default usersReducer;