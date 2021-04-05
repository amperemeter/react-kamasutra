import * as axios from 'axios';

const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      'API-KEY': '085e3771-2e67-4379-8386-bf92ed5e2175'
   }
});

export const usersAPI = {
   getUsers(currentPage = 1, pageSize = 5) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`)
         .then(response => response.data);
   },
   follow(userId) {
      return instance.post(`follow/${userId}`)
         .then(response => response.data);
   },
   unfollow(userId) {
      return instance.delete(`follow/${userId}`)
         .then(response => response.data);
   }
}

export const authAPI = {
   getAuth() {
      return instance.get('auth/me').then(response => response.data);
   }
}

export const profileAPI = {
   getProfile(userId) {
      return instance.get(`profile/${userId}`)
         .then(response => response.data);
   }
}