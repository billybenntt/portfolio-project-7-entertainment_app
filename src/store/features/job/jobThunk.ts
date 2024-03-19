import {clearValues} from './jobSlice.ts'
import {checkBadResponse} from '../user/userThunk.ts'
import dataFetch from '@/utils/axios/data.fetch.ts'
import {getAllJobs, showLoading} from '../allJobs/allJobsSlice.ts'
import {ReduxStore} from "@/store/store.ts";


type thunkFunction = (url: string, payload: any, thunkAPI: ReduxStore) => Promise<string>


export const createJobThunk: thunkFunction = async (url, payload, thunkAPI,) => {
    try {
        const {data} = await dataFetch.post(url, payload)
        thunkAPI.dispatch(clearValues())
        return data
    } catch (error) {
        return checkBadResponse(error, thunkAPI)
    }
}

export const deleteJobThunk = async (url, thunkAPI) => {
    /* Show Loading from AllJobsPage  */
    thunkAPI.dispatch(showLoading())

    /*Delete Resource */
    try {
        const {data} = await dataFetch.delete(url)
        /* Reload ALl Jobs and Hide Loading */
        thunkAPI.dispatch(getAllJobs())
        return data
    } catch (error) {
        return checkBadResponse(error, thunkAPI)
    }
}

export const editJobThunk: thunkFunction = async (url: string, payload, thunkAPI) => {
    const {jobId, job} = payload
    try {
        const {data} = await dataFetch.patch(`${url}${jobId}`, job)
        thunkAPI.dispatch(clearValues())
        return data
    } catch (error) {
        return checkBadResponse(error, thunkAPI)
    }
}