import * as axios from 'axios'


const instance = axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0`,
  timeout: 1000 * 5,
  withCredentials: true,
  // credentials: true,
  // origin: 'http://localhost:3000',
  headers: {
    'API-KEY': '251be3f3-4e87-4c36-a25c-333f51a55e3d'
  },
});


export const usersApi = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
  },

  deleteUser(id) {
    return instance.delete(`/follow/${id}`)
  },

  postUser(id) {
    return instance.post(`/follow/${id}`)
  },
}


export const profileApi = {
  getProfile(id) {
    return instance.get(`/profile/${id}`)
  },

  getStatus(id) {
    return instance.get(`/profile/status/${id}`)
  },

  putStatus(status) {
    return instance.put('profile/status', {status})
  },

  putPhoto(file) {
    const formData = new FormData()
    formData.append(`image`, file)

    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': `Multipart/form-data`
      }
    })
  },

  saveProfile(profile) {
    return instance.put('profile', profile)
  }
}


export const authApi = {
  getMe() {
    return instance.get(`/auth/me`)
  },

  postLogin(email, password, rememberMe = false) {
    return instance.post('/auth/login', {email, password, rememberMe})
  },

  deleteLogin() {
    return instance.delete('/auth/login')
  },
}