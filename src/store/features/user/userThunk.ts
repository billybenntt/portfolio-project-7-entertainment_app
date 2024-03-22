import dataFetch from '@/utils/axios/data.fetch.ts'
import {clearStore, logoutUser} from '@/store/features/user/userSlice.ts'
import {clearAllJobsState} from '@/store/features/allJobs/allJobsSlice.ts'
import {clearValues} from '@/store/features/job/jobSlice.ts'


const registerUserThunk = async (url: string, payload: any, thunkAPI: any) => {
    try {
        const {data} = await dataFetch.post(url, payload)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue("failed to register user")
    }

}

const loginUserThunk = async (url: string, payload: any, thunkAPI: any) => {
    try {
        const {data} = await dataFetch.post(url, payload)

        return data
    } catch (error) {
        return thunkAPI.rejectWithValue("failed to login user")
    }
}

const updateUserThunk = async (url: string, payload: any, thunkAPI: any) => {
    try {
        const {data} = await dataFetch.patch(url, payload)

        return data
    } catch (error) {
        return checkBadResponse(error, thunkAPI)
    }
}

// CLEAR STORE THUNK
const clearStoreThunk = async (message: any, thunkAPI: any) => {
    try {
        /* Clear Add jobs State */
        thunkAPI.dispatch(clearValues())
        /* Clear All jobs State */
        thunkAPI.dispatch(clearAllJobsState())
        /* Logout User */
        thunkAPI.dispatch(logoutUser(message))
        return Promise.resolve()
    } catch (error) {
        console.log(error)
        return Promise.reject()
    }
}

const checkBadResponse = async (error: any, thunkAPI: any) => {
    const {response: {data: {msg}, status}} = error
    if (status === 401) {
        thunkAPI.dispatch(clearStore(""))
        return thunkAPI.rejectWithValue('unauthorized logging user out')
    }
    return thunkAPI.rejectWithValue(msg)

}

export {registerUserThunk, loginUserThunk, updateUserThunk, clearStoreThunk, checkBadResponse}