import { clearValues } from './jobSlice.ts'
import { checkBadResponse } from '../user/userThunk.ts'
import fetchData from '../../../utils/axios/fetchData.ts'
import { getAllJobs, showLoading } from '../allJobs/allJobsSlice.ts'

export const createJobThunk = async (url, payload, thunkAPI) => {
  try {
    const { data } = await fetchData.post(url, payload)
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
    const { data } = await fetchData.delete(url)
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
    const { data } = await fetchData.patch(`${url}/${jobId}`, job)

    thunkAPI.dispatch(clearValues())
    return data
  } catch (error) {
    return checkBadResponse(error, thunkAPI)
  }
}