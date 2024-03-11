import {toast} from 'react-toastify'
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {getUserFromLocalStorage} from '../../../utils/localStorage.ts'
import {createJobThunk, deleteJobThunk, editJobThunk} from './jobThunk.ts'

const initialState = {
    isLoading: false,
    position: '',
    company: '',
    jobLocation: '',
    jobType: 'full-time',
    jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
    status: 'pending',
    statusOptions: ['interview', 'declined', 'pending'],
    isEditing: false,
    editJobID: ''
}

const createJob = createAsyncThunk('job/CreateJob',
    async (jobPayload, thunkAPI) => {
        return createJobThunk('jobs', jobPayload, thunkAPI)
    }
)

const deleteJob = createAsyncThunk('allJobs/deleteJob',
    async (jobId, thunkAPI) => {
        return deleteJobThunk(`jobs/${jobId}`, thunkAPI)
    }
)

const editJob = createAsyncThunk('job/editJob',
    async (editPayload, thunkAPI) => {
        return editJobThunk('jobs', editPayload, thunkAPI)
    }
)

const jobSlice = createSlice({
    name: 'job',
    initialState,

    reducers: {
        setEditJob: (state, action) => {
            const {payload} = action
            /* This payload  overrides the existing state*/
            return {...state, ...payload, isEditing: true,}
        },
        handleChange: (state, action) => {
            const {payload} = action
            const {inputName, inputValue} = payload
            state[inputName] = inputValue
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
                toast.success('Job Created')
            })
            .addCase(createJob.rejected, (state, {payload}) => {
                state.isLoading = false
                toast.error(payload)
            })
            .addCase(deleteJob.fulfilled, (_, {payload}) => {
                const {msg} = payload
                toast.success(msg)
            })
            .addCase(deleteJob.rejected, (_, {payload}) => {
                toast.error(payload)
            })
            .addCase(editJob.pending, (state) => {
                state.isLoading = true
            })
            .addCase(editJob.fulfilled, () => {
                toast.success('Job Modified...')
            })
            .addCase(editJob.rejected, (state, {payload}) => {
                state.isLoading = false
                toast.error(payload)
            })
    }

})

export default jobSlice.reducer
export const {handleChange, clearValues, setEditJob} = jobSlice.actions
export {deleteJob, createJob, editJob}