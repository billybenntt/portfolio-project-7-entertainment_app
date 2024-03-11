import axios from 'axios'
import { getUserFromLocalStorage } from '../localStorage.ts'

const fetchData = axios.create({
  baseURL: 'https://jobify-prod.herokuapp.com/api/v1/toolkit',
})

fetchData.interceptors.request.use((request) => {
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

export default fetchData


