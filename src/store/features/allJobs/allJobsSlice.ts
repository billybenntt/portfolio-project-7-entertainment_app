import {toast} from 'react-toastify'
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {getAllJobsThunk} from './allJobsThunk.ts'
import {AllJobsState} from '@/types/app.definitions.ts'

const initialState: AllJobsState = {
    isLoading: false,
    jobs: [],
    totalJobs: 0,
    numOfPages: 1,
    page: 1,
    stats: {
        interview: 0,
        pending: 0,
        declined: 0
    },
    chartData: [],
    searchOptions: {
        search: '',
        searchStatus: 'all',
        searchType: 'all',
        sort: 'latest',
        sortOptions: ['latest', 'oldest', 'a-z', 'z-a']
    }
}


const getAllJobs = createAsyncThunk('allJobs/getJobs',
    async (_, thunkAPI) => {
        return getAllJobsThunk('/rest/v1/jobs?select=*', thunkAPI)
    }
)


const allJobsSlice = createSlice({
    name: 'allJobs',
    initialState,
    reducers: {
        showLoading: (state) => {
            state.isLoading = true
        },
        handleChange: (state, action) => {
            const {inputName, inputValue} = action.payload
            const name = inputName as keyof typeof initialState.searchOptions
            state.searchOptions[name] = inputValue
        },
        clearFilters: (state) => {
            state.isLoading = false
        },
        changePage: (state, action) => {
            state.page = action.payload
        },
        clearAllJobsState: () => {
            return initialState
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllJobs.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllJobs.fulfilled, (state, {payload}) => {
                state.isLoading = false
                state.jobs = payload
                state.totalJobs = payload.length

            })
            .addCase(getAllJobs.rejected, (state) => {
                state.isLoading = false
                toast.error("failed to get all jobs")
            })
    }

})

export {getAllJobs}
export default allJobsSlice.reducer
export const {
    showLoading,
    handleChange,
    clearFilters,
    changePage,
    clearAllJobsState
} = allJobsSlice.actions
