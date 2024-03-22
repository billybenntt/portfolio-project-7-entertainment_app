import {clearValues} from './jobSlice.ts'
import {checkBadResponse} from '@/store/features/user/userThunk.ts'
import dataFetch from '@/utils/axios/data.fetch.ts'
import {getAllJobs, showLoading} from '@/store/features/allJobs/allJobsSlice.ts'


const createJobThunk = async (url, payload, thunkAPI) => {
    try {
        const {data} = await dataFetch.post(url, payload)
        thunkAPI.dispatch(clearValues())
        return data
    } catch (error) {
        return checkBadResponse(error, thunkAPI)
    }
}

const deleteJobThunk = async (url, thunkAPI) => {
    thunkAPI.dispatch(showLoading())

    try {
        const {data} = await dataFetch.delete(url)
        thunkAPI.dispatch(getAllJobs())
        return data
    } catch (error) {
        return checkBadResponse(error, thunkAPI)
    }
}

const editJobThunk = async (url, payload, thunkAPI) => {
    const {jobId, job} = payload
    try {
        const {data} = await dataFetch.patch(`${url}${jobId}`, job)
        thunkAPI.dispatch(clearValues())
        return data
    } catch (error) {
        return checkBadResponse(error, thunkAPI)
    }
}


export {editJobThunk, deleteJobThunk, createJobThunk}