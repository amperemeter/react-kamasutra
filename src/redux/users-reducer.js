const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
// const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
   users: [],
   pageSize: 5,
   totalUsersCount: 20,
   currentPage: 1,
   isFetching: true
}

const usersReducer = (state = initialState, tion) => {
   switch (tion.type) {
      case SET_USERS:
         return {
            ...state,
            users: tion.users
         }

      case FOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === tion.userID) {
                  return { ...u, followed: true };
               }
               return u;
            })
         }

      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === tion.userID) {
                  return { ...u, followed: false };
               }
               return u;
            })
         }

      case SET_CURRENT_PAGE:
         return { ...state, currentPage: tion.currentPage }

      // case SET_TOTAL_USERS_COUNT:
      //    return { ...state, totalUsersCount: tion.totalUsersCount }

      case TOGGLE_IS_FETCHING:
         return { ...state, isFetching: tion.isFetching }

      default:
         return state;
   }
}

export const setUsers = (users) => ({ type: SET_USERS, users });
export const follow = (userID) => ({ type: FOLLOW, userID });
export const unfollow = (userID) => ({ type: UNFOLLOW, userID });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
// export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export default usersReducer;