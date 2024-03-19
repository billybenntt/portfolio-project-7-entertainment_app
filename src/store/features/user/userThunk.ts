import dataFetch from '@/utils/axios/data.fetch.ts'
import {clearStore, logoutUser} from '@/store/features/user/userSlice.ts'
import {clearAllJobsState} from '@/store/features/allJobs/allJobsSlice.ts'
import {clearValues} from '@/store/features/job/jobSlice.ts'

import {ReduxStore} from "@/store/store.ts";


type thunkFunction = (url: string, userPayload: any , thunkAPI: ReduxStore) => Promise<string>


export const registerUserThunk: thunkFunction = async (url, userPayload, thunkAPI) => {
    try {
        const {data} = await dataFetch.post(url, userPayload)
        /* Return Successful Promise */
        return data
    } catch (error: any) {
        const {response: {data: {msg}}} = error
        return thunkAPI.rejectWithValue(msg)
    }

}

export const loginUserThunk: thunkFunction = async (url, userPayload, thunkAPI) => {
    try {
        const {data} = await dataFetch.post(url, userPayload)

        return data
    } catch (error: any) {
        const {response: {data: {msg}}} = error
        return thunkAPI.rejectWithValue(msg)
    }
}

export const updateUserThunk : thunkFunction = async (url, userPayload, thunkAPI) => {
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