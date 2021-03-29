const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
// const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
   users: [],
   pageSize: 5,
   totalUsersCount: 20,
   currentPage: 1,
}

const usersReducer = (state = initialState, action) => {
   switch (action.type) {
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

      // case SET_TOTAL_USERS_COUNT:
      //    return { ...state, totalUsersCount: action.totalUsersCount }

      default:
         return state;
   }
}

export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const followAC = (userID) => ({ type: FOLLOW, userID });
export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID });
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
// export const setTotalUsersCountAC = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });

export default usersReducer;