import { clearValues } from './jobSlice.ts'
import { checkBadResponse } from '../user/userThunk.ts'
import dataFetch from '../../../utils/axios/dataFetch.ts'
import { getAllJobs, showLoading } from '../allJobs/allJobsSlice.ts'

export const createJobThunk = async (url, payload, thunkAPI) => {
  try {
    const { data } = await dataFetch.post(url, payload)
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
    const { data } = await dataFetch.delete(url)
    /* Reload ALl Jobs and Hide Loading */
    thunkAPI.dispatch(getAllJobs())
    return data
  } catch (error) {
    return checkBadResponse(error, thunkAPI)
  }
}

export const editJobThunk = async (url, payload, thunkAPI) => {
  const { jobId, job } = payload
  try {
    const { data } = await dataFetch.patch(`${url}/${jobId}`, job)

    thunkAPI.dispatch(clearValues())
    return data
  } catch (error) {
    return checkBadResponse(error, thunkAPI)
  }
}