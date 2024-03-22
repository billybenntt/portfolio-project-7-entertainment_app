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



export type AsyncThunkConfig = {
  /** return type for `thunkApi.getState` */
  state?: unknown
  /** type for `thunkApi.dispatch` */
  dispatch?: typeof store.dispatch;
  /** type of the `extra` argument for the thunk middleware, which will be passed in as `thunkApi.extra` */
  extra?: unknown
  /** type to be passed into `rejectWithValue`'s first argument that will end up on `rejectedAction.payload` */
  rejectValue?: unknown
  /** return type of the `serializeError` option callback */
  serializedErrorType?: unknown
  /** type to be returned from the `getPendingMeta` option callback & merged into `pendingAction.meta` */
  pendingMeta?: unknown
  /** type to be passed into the second argument of `fulfillWithValue` to finally be merged into `fulfilledAction.meta` */
  fulfilledMeta?: unknown
  /** type to be passed into the second argument of `rejectWithValue` to finally be merged into `rejectedAction.meta` */
  rejectedMeta?: unknown
}