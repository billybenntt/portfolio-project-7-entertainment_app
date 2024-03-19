import dataFetch from '@/utils/axios/data.fetch.ts'
import {checkBadResponse} from '@/store/features/user/userThunk.ts'
import {ReduxStore} from "@/store/store.ts";


type thunkFunction = (url: string, thunkAPI: ReduxStore) => Promise<string>


export const getAllJobsThunk: thunkFunction = async (url: string, thunkAPI) => {

    const {search} = thunkAPI.getState().allJobs


    const searchURl = `/rest/v1/jobs?select=*`
    // if (search) {
    //     searchURl = searchURl + `&search=${search}`
    // }

    try {
        const {data} = await dataFetch.get(searchURl)

        console.log("data", data)
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

