import dataFetch from '@/utils/axios/data.fetch.ts'
import {checkBadResponse} from '@/store/features/user/userThunk.ts'
import {ReduxStore } from "@/store/store.ts";



type thunkFunction = (url: string, thunkAPI: ReduxStore) => Promise<string>



export const getAllJobsThunk: thunkFunction = async (url: string, thunkAPI) => {

    const {search, page, searchStatus, searchType, sort} = thunkAPI.getState().allJobs

    console.log(url)

    let searchURl = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`
    if (search) {
        searchURl = searchURl + `&search=${search}`
    }


    try {
        const {data} = await dataFetch.get(searchURl)
        return data
    } catch (error) {
        return checkBadResponse(error, thunkAPI)
    }
}

export const showStatsThunk: thunkFunction = async (url: string, thunkAPI) => {
    try {
        const {data} = await dataFetch.get(url)
        return data
    } catch (error) {
        return checkBadResponse(error, thunkAPI)
    }
}

