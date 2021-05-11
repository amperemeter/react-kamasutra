import * as axios from 'axios';

export const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      'API-KEY': '3a40156d-1821-4706-a81d-bb51a42a5d6d',
   }
});

export const authAPI = {
   me() {
      return instance.get('auth/me');
   },
}

export const profileAPI = {
   getProfile(userId) {
      return instance.get(`profile/${userId}`);
   },
   getStatus(userId) {
      return instance.get(`profile/status/${userId}`);
   },
   updateStatus(status) {
      return instance.put(`profile/status`, { status });
   },

   savePhoto(photoFile) {
      const formData = new FormData();
      formData.append('image', photoFile);
      return instance.put(`profile/photo`, formData, {
         headers: {
            'Content-Type': 'multipart/form-data'
         }
      });
   }
}

export const usersAPI = {
   getUsers(currentPage = 1, pageSize = 5) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`);
   },
   follow(userId) {
      return instance.post(`follow/${userId}`);
   },
   unfollow(userId) {
      return instance.delete(`follow/${userId}`);
   },
}

export const securityAPI = {
   getCaptchaUrl() {
      return instance.get('security/get-captcha-url');
   }
}