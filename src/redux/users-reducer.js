const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
   users: [
      // {
      //    id: 1,
      //    followed: true,
      //    fullName: 'Дмитрий',
      //    userImage: '../assets/images/avatar.png',
      //    status: '^__^',
      //    location: {
      //       city: 'Тамбов',
      //       country: 'Россия'
      //    }
      // },
      // {
      //    id: 2,
      //    followed: false,
      //    fullName: 'Ольга',
      //    userImage: '../assets/images/avatar.png',
      //    status: '^__^',
      //    location: {
      //       city: 'Москва',
      //       country: 'Россия'
      //    }
      // },
      // {
      //    id: 3,
      //    followed: false,
      //    fullName: 'Ирина',
      //    userImage: '../assets/images/avatar.png,
      //    status: '^__^',
      //    location: {
      //       city: 'Воронеж',
      //       country: 'Россия'
      //    }
      // },
      // {
      //    id: 4,
      //    followed: false,
      //    fullName: 'Петр',
      //    userImage: '../assets/images/avatar.png,
      //    status: '^__^',
      //    location: {
      //       city: 'Курск',
      //       country: 'Россия'
      //    }
      // }
   ]
}

const usersReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USERS:
         return {
            ...state,
            users: [...state.users, ...action.users]
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

      default:
         return state;
   }
}

export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const followAC = (userID) => ({ type: FOLLOW, userID });
export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID });

export default usersReducer;