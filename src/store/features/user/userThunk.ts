import dataFetch from '@/utils/axios/data.fetch.ts'
import {clearStore, logoutUser} from '@/store/features/user/userSlice.ts'
import {clearAllJobsState} from '@/store/features/allJobs/allJobsSlice.ts'
import {clearValues} from '@/store/features/job/jobSlice.ts'


const registerUserThunk = async (url, payload, thunkAPI) => {
    try {
        const {data} = await dataFetch.post(url, payload)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data['msg'])
    }

}

const loginUserThunk = async (url, payload, thunkAPI) => {
    try {
        const {data} = await dataFetch.post(url, payload)

        return data
    } catch (error: any) {
        const {response: {data: {msg}}} = error
        return thunkAPI.rejectWithValue(msg)
    }
}

const updateUserThunk = async (url, payload, thunkAPI) => {
    try {
        const {data} = await dataFetch.patch(url, payload)

        return data
    } catch (error) {
        return checkBadResponse(error, thunkAPI)
    }
}

// CLEAR STORE THUNK
const clearStoreThunk = async (message, thunkAPI) => {
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

const checkBadResponse = async (error, thunkAPI) => {
    const {response: {data: {msg}, status}} = error
    if (status === 401) {
        thunkAPI.dispatch(clearStore(""))
        return thunkAPI.rejectWithValue('Unauthorized logging user out')
    }
    return thunkAPI.rejectWithValue(msg)

}

export {registerUserThunk, loginUserThunk, updateUserThunk, clearStoreThunk, checkBadResponse}