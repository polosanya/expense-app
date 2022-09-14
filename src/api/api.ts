import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_API_URL

export type RegisterData = {
  password: string
  username: string
  displayName: string
}

type LoginData = {
  username: string
  password: string
}

export const registerAPI = (data: RegisterData) => {
  return axios.post('/auth/register', data)
}

export const loginAPI = (data: LoginData) => {
  return axios.post('/auth/login', data)
}
