import {toast} from 'react-toastify'
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {getUserFromLocalStorage} from '@/utils/data.localstorage.ts'
import {createJobThunk, deleteJobThunk, editJobThunk} from './jobThunk.ts'
import {JobState} from '@/types/app.definitions.ts'


const initialState: JobState = {
    isLoading: false,
    isEditing: false,
    singleJob: {
        position: '',
        company: '',
        jobLocation: '',
        jobType: 'full-time',
        jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
        status: 'pending',
        statusOptions: ['interview', 'declined', 'pending'],
        editJobID: ''
    }

}



const createJob = createAsyncThunk('job/CreateJob',
    async (jobPayload: string, thunkAPI) => {
        return createJobThunk('/rest/v1/jobs', jobPayload, thunkAPI)
    }
)

const deleteJob = createAsyncThunk('allJobs/deleteJob',
    async (jobId: string, thunkAPI) => {
        return deleteJobThunk(`/rest/v1/jobs?_id=eq.${jobId}`, thunkAPI)
    }
)

const editJob = createAsyncThunk('job/editJob',
    async (editPayload: object, thunkAPI) => {
        return editJobThunk(`/rest/v1/jobs?_id=eq.`, editPayload, thunkAPI)
    }
)

const jobSlice = createSlice({
    name: 'job',
    initialState,

    reducers: {
        setEditJob: (state, action) => {
            const {payload} = action
            /* This payload overrides the existing state*/
            return {...state, ...payload, isEditing: true,}
        },
        handleChange: (state, action) => {
            const {inputName, inputValue} = action.payload
            const name = inputName as keyof typeof initialState.singleJob
            state.singleJob[name] = inputValue
        },

        clearValues: () => {
            const {location} = getUserFromLocalStorage()
            /* Reset to Default State */
            return {...initialState, jobLocation: location || ''}
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createJob.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createJob.fulfilled, (state) => {
                state.isLoading = false
                toast.success("Job created successfully")
            })
            .addCase(createJob.rejected, (state) => {
                state.isLoading = false
                toast.error("failed to create job")
            })
            .addCase(deleteJob.fulfilled, (state) => {
                state.isLoading = false
                toast.success("Job deleted successfully")
            })
            .addCase(deleteJob.rejected, (state) => {
                state.isLoading = false
                toast.error("failed to delete job")
            })
            .addCase(editJob.pending, (state) => {
                state.isLoading = true
            })
            .addCase(editJob.fulfilled, (state) => {
                state.isLoading = false
                toast.success("Job modified successfully")
            })
            .addCase(editJob.rejected, (state) => {
                state.isLoading = false
                toast.error("failed to edit job")
            })
    }

})

export default jobSlice.reducer
export const {handleChange, clearValues, setEditJob} = jobSlice.actions
export {deleteJob, createJob, editJob}