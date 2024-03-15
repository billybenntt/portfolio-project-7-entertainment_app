import dataFetch from '@/utils/axios/dataFetch.ts'
import {checkBadResponse} from '../user/userThunk.ts'
import {RootState, ReduxStore} from "@/store/store.ts";


export const getAllJobsThunk = async (_: void, thunkAPI: ReduxStore) => {

    const state = thunkAPI.getState() as RootState
    const {search, page, searchStatus, searchType, sort} = state.allJobs

    let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`
    if (search) {
        url = url + `&search=${search}`
    }


    try {
        const {data} = await dataFetch.get(url)
        return data
    } catch (error) {
        return checkBadResponse(error, thunkAPI)
    }
}

export const showStatsThunk = async (url: string, thunkAPI: ReduxStore) => {
    try {
        const {data} = await dataFetch.get(url)
        return data
    } catch (error) {
        return checkBadResponse(error, thunkAPI)
    }
}

