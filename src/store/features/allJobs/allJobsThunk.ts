import dataFetch from '@/utils/axios/data.fetch.ts'
import {checkBadResponse} from '@/store/features/user/userThunk.ts'



const getAllJobsThunk = async (url: string, thunkAPI: any) => {
    try {

        const storeData = JSON.parse(localStorage.getItem("jobs")!)

        if (!storeData) {
            const {data} = await dataFetch.get(url)
            localStorage.setItem("jobs", JSON.stringify(data))
            return data
        }

        return storeData
    } catch (error) {
        return checkBadResponse(error, thunkAPI)
    }
}


export {getAllJobsThunk}