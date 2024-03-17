import {toast} from 'react-toastify'
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {getAllJobsThunk, showStatsThunk} from './allJobsThunk.ts'


const initialFilterState = {
    search: '',
    searchStatus: 'all',
    searchType: 'all',
    sort: 'latest',
    sortOptions: ['latest', 'oldest', 'a-z', 'z-a']
}

const initialState = {
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
    monthlyApplications: [],
    ...initialFilterState
}


const getAllJobs = createAsyncThunk('allJobs/getJobs',
    async (_, thunkAPI) => {
        return getAllJobsThunk(_, thunkAPI)
    }
)

const showStats = createAsyncThunk('allJobs/showStats',
    async (_, thunkAPI) => {

        return showStatsThunk('jobs/stats', thunkAPI)
    })

const allJobsSlice = createSlice({
    name: 'allJobs',
    initialState,
    reducers: {
        showLoading: (state) => {
            state.isLoading = true
        },
        hideLoading: (state) => {
            state.isLoading = false
        },
        handleChange: (state, action) => {
            const {inputName, inputValue} = action.payload
            state.page = 1
            state[inputName] = inputValue
        },
        clearFilters: (state) => {
            return {...state, ...initialFilterState, page: 1}
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
                const {jobs, totalJobs, numOfPages} = payload
                state.jobs = jobs
                state.totalJobs = totalJobs
                state.numOfPages = numOfPages
            })
            .addCase(getAllJobs.rejected, (state, action) => {
                state.isLoading = false
                const message = action.payload as string
                toast.error(message)
            })
            .addCase(showStats.pending, (state) => {
                state.isLoading = true
            })
            .addCase(showStats.fulfilled, (state, {payload}) => {
                const {defaultStats, monthlyApplications} = payload
                state.isLoading = false
                state.stats = defaultStats
                state.monthlyApplications = monthlyApplications
            })
            .addCase(showStats.rejected, (state, action) => {
                state.isLoading = false
                const message = action.payload as string
                toast.error(message)
            });
    }

})

export {getAllJobs, showStats}
export default allJobsSlice.reducer
export const {
    showLoading,
    handleChange,
    clearFilters,
    changePage,
    clearAllJobsState
} = allJobsSlice.actions
