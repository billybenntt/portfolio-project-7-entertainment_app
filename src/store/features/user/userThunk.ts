import fetchData from '../../../utils/axios/fetchData.ts'
import {clearStore, logoutUser} from './userSlice.ts'
import {clearAllJobsState} from '../allJobs/allJobsSlice.ts'
import {clearValues} from '../job/jobSlice.ts'

export const registerUserThunk = async (url, userPayload, thunkAPI) => {
    try {
        const {data} = await fetchData.post(url, userPayload)
        /* Return Successful Promise */
        return data
    } catch (error) {
        const {response: {data: {msg}}} = error
        return thunkAPI.rejectWithValue(msg)
    }

}

export const loginUserThunk = async (url, userPayload, thunkAPI) => {
    try {
        const {data} = await fetchData.post(url, userPayload)
        return data
    } catch (error) {
        const {response: {data: {msg}}} = error
        return thunkAPI.rejectWithValue(msg)
    }
}

export const updateUserThunk = async (url, userPayload, thunkAPI) => {
    try {
        const {data} = await fetchData.patch(url, userPayload)

        return data
    } catch (error) {
        return checkBadResponse(error, thunkAPI)
    }
}

// CLEAR STORE THUNK
export const clearStoreThunk = async (message, thunkAPI) => {
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

export const checkBadResponse = async (error, thunkAPI) => {
    const {response: {data: {msg}, status}} = error
    if (status === 401) {
        thunkAPI.dispatch(clearStore)
        return thunkAPI.rejectWithValue('Unauthorized logging user out')
    }
    return thunkAPI.rejectWithValue(msg)

}