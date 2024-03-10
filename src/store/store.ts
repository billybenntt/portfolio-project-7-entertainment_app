import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
  }
})



// TYPESCRIPT REQUIRED
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {invoices: invoicesState}
export type AppDispatch = typeof store.dispatch


