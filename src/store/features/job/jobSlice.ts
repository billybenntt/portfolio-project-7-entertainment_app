import {toast} from 'react-toastify'
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {getUserFromLocalStorage} from '@/utils/data.localstorage.ts'
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


type updateState = {
    inputName: string
    inputValue: string
}

const createJob = createAsyncThunk('job/CreateJob',
    async (jobPayload: object, thunkAPI) => {
        return createJobThunk('jobs', jobPayload, thunkAPI)
    }
)

const deleteJob = createAsyncThunk('allJobs/deleteJob',
    async (jobId: string, thunkAPI) => {
        return deleteJobThunk(`jobs/${jobId}`, thunkAPI)
    }
)

const editJob = createAsyncThunk('job/editJob',
    async (editPayload: object, thunkAPI) => {
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
        handleChange: (state, action: PayloadAction<updateState>) => {
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
            .addCase(createJob.rejected, (state, action) => {
                state.isLoading = false
                const message = action.payload as string
                toast.error(message)
            })
            .addCase(deleteJob.fulfilled, (_, action) => {
                const {msg} = action.payload
                toast.success(msg)
            })
            .addCase(deleteJob.rejected, (_, action) => {
                console.log(action)
                const message = action.payload as string
                toast.error(message)
            })
            .addCase(editJob.pending, (state) => {
                state.isLoading = true
            })
            .addCase(editJob.fulfilled, () => {
                toast.success('Job Modified...')
            })
            .addCase(editJob.rejected, (state, action) => {
                state.isLoading = false
                const message = action.payload as string
                toast.error(message)
            })
    }

})

export default jobSlice.reducer
export const {handleChange, clearValues, setEditJob} = jobSlice.actions
export {deleteJob, createJob, editJob}