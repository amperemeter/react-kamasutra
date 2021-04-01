import * as axios from 'axios';

const instance = axios.create(
   {
      withCredentials: true,
      baseURL: 'https://social-network.samuraijs.com/api/1.0/',
      headers: {
         'API-KEY': '085e3771-2e67-4379-8386-bf92ed5e2175'
      }
   });

export const getUsers = (currentPage = 1, pageSize = 10) => {
   return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
}