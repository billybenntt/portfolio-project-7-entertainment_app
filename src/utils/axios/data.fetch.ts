import axios from 'axios'
import {getUserFromLocalStorage} from '@/utils/data.localstorage.ts'



const dataFetch = axios.create({
    baseURL: 'https://ixnsvqbmaiyhblbsintm.supabase.co',
})

dataFetch.interceptors.request.use((request) => {
    request.headers['apikey'] = `${import.meta.env.VITE_API_KEY}`

    const user = getUserFromLocalStorage()
    /* If User Exist Modify request with Token */
    if (user) {
        const {token} = user
        request.headers['authorization'] = `Bearer ${token}`
    }
    return request
}, (error) => {
    return Promise.reject(error)
})

export default dataFetch


