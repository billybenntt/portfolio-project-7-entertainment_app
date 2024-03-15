import axios from 'axios'
import { getUserFromLocalStorage } from '../localStorage.ts'

const dataFetch = axios.create({
  baseURL: 'https://jobify-prod.herokuapp.com/api/v1/toolkit',
})

dataFetch.interceptors.request.use((request) => {
  const user = getUserFromLocalStorage()
  /* If User Exist Modify request with Token */
  if (user) {
    const { token } = user
    request.headers['authorization'] = `Bearer ${token}`
  }
  return request
}, (error) => {
  return Promise.reject(error)
})

export default dataFetch


