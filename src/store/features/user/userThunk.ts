import dataFetch from '@/utils/axios/dataFetch.ts'
import {clearStore, logoutUser} from '@/store/features/user/userSlice.ts'
import {clearAllJobsState} from '@/store/features/allJobs/allJobsSlice.ts'
import {clearValues} from '@/store/features/job/jobSlice.ts'


export const registerUserThunk = async (url: string, userPayload: object, thunkAPI: any) => {
    try {
        const {data} = await dataFetch.post(url, userPayload)
        /* Return Successful Promise */
        return data
    } catch (error: any) {
        const {response: {data: {msg}}} = error
        return thunkAPI.rejectWithValue(msg)
    }

}

export const loginUserThunk = async (url: string, userPayload: object, thunkAPI: any) => {
    try {
        const {data} = await dataFetch.post(url, userPayload)
        return data
    } catch (error: any) {
        const {response: {data: {msg}}} = error
        return thunkAPI.rejectWithValue(msg)
    }
}

export const updateUserThunk = async (url: string, userPayload: object, thunkAPI: any) => {
    try {
        const {data} = await dataFetch.patch(url, userPayload)

        return data
    } catch (error) {
        return checkBadResponse(error, thunkAPI)
    }
}

// CLEAR STORE THUNK
export const clearStoreThunk = async (message: string, thunkAPI: any) => {
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

export const checkBadResponse = async (error: any, thunkAPI: any) => {
    const {response: {data: {msg}, status}} = error
    if (status === 401) {
        thunkAPI.dispatch(clearStore)
        return thunkAPI.rejectWithValue('Unauthorized logging user out')
    }
    return thunkAPI.rejectWithValue(msg)

}