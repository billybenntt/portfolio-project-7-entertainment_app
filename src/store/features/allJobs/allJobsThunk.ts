import fetchData from '../../../utils/axios/fetchData.ts'
import {checkBadResponse} from '../user/userThunk.ts'

export const getAllJobsThunk = async (_, thunkAPI) => {
    const {search, page, searchStatus, searchType, sort} = thunkAPI.getState()['allJobs']
    let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`
    if (search) {
        url = url + `&search=${search}`
    }
    try {
        const {data} = await fetchData.get(url)
        return data
    } catch (error) {
        return checkBadResponse(error, thunkAPI)
    }
}

export const showStatsThunk = async (url, thunkAPI) => {
    try {
        const {data} = await fetchData.get(url)
        return data
    } catch (error) {
        return checkBadResponse(error, thunkAPI)
    }
}

