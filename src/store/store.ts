import {configureStore} from '@reduxjs/toolkit'
import userSlice from '@/store/features/user/userSlice.ts'
import jobSlice from '@/store/features/job/jobSlice.ts'
import allJobsSlice from '@/store/features/allJobs/allJobsSlice.ts'

export const store = configureStore({
    reducer: {
        user: userSlice,
        job: jobSlice,
        allJobs: allJobsSlice
    }
})


// TYPESCRIPT REQUIRED
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {invoices: invoicesState}
export type AppDispatch = typeof store.dispatch


export type ReduxStore = {
    getState: () => RootState;
    dispatch: AppDispatch;
    rejectWithValue: (value: string) => void;
};


