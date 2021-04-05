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
   },
   follow(userId) {
      return instance.post(`follow/${userId}`)
   },
   unfollow(userId) {
      return instance.delete(`follow/${userId}`)
   },
   getProfile(userId) {
      return instance.get(`profile/${userId}`)
   }
}

export const authAPI = {
   me() {
      return instance.get('auth/me');
   }
}