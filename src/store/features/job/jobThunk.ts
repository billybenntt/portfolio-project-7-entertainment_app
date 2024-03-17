import {clearValues} from './jobSlice.ts'
import {checkBadResponse} from '../user/userThunk.ts'
import dataFetch from '@/utils/axios/data.fetch.ts'
import {getAllJobs, showLoading} from '../allJobs/allJobsSlice.ts'
import {ReduxStore} from "@/store/store.ts";


type thunkFunction = (url: string, thunkAPI: ReduxStore, payload: any) => Promise<string>


export const createJobThunk: thunkFunction = async (url, thunkAPI, payload) => {
    try {
        const {data} = await dataFetch.post(url, payload)
        thunkAPI.dispatch(clearValues())
        return data
    } catch (error) {
        return checkBadResponse(error, thunkAPI)
    }
}

export const deleteJobThunk: thunkFunction = async (url, thunkAPI) => {
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

export const editJobThunk: thunkFunction = async (url: string, thunkAPI, payload) => {
    const {jobId, job} = payload
    try {
        const {data} = await dataFetch.patch(`${url}/${jobId}`, job)
        thunkAPI.dispatch(clearValues())
        return data
    } catch (error) {
        return checkBadResponse(error, thunkAPI)
    }
}