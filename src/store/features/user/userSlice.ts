import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {toast} from 'react-toastify'
import {loginUserThunk, registerUserThunk, updateUserThunk, clearStoreThunk} from './userThunk.ts'
import {addUserToLocalStorage, getUserFromLocalStorage, removeUserFromLocalStorage} from '@/utils/data.localstorage.ts'

// User Slice Local State
const initialState = {
    isLoading: false,
    isSidebarOpen: true,
    user: getUserFromLocalStorage()
}

// New User Thunk
const registerUser = createAsyncThunk('user/registerUser',
    async (userPayload, thunkAPI) => {
        return registerUserThunk('/auth/v1/signup', userPayload, thunkAPI)
    })

// Login User Thunk
const loginUser = createAsyncThunk('user/loginUser',
    async (userPayload, thunkAPI) => {
        return loginUserThunk('/auth/v1/token?grant_type=password', userPayload, thunkAPI)
    })

// Update User Thunk
const updateUser = createAsyncThunk('user/updateUser',
    async (userPayload: object, thunkAPI) => {
        /* Get Token From Local State */
        return updateUserThunk('/auth/updateUser', userPayload, thunkAPI)
    })

const clearStore = createAsyncThunk('user/clearStore', clearStoreThunk)

// User Slice
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen
        },
        logoutUser: (state, {payload}) => {
            state.user = null
            state.isSidebarOpen = false
            if (payload) {
                toast.info(payload, {theme: 'colored'})
            }
            removeUserFromLocalStorage()
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(updateUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateUser.fulfilled, (state, {payload}) => {
                const {user, access_token} = payload
                state.user.token = access_token
                state.user = user
                addUserToLocalStorage(state.user)
                toast.success(`User updated`)
                state.isLoading = false
            })
            .addCase(updateUser.rejected, (state, action) => {
                const message = action.payload as string
                toast.error(message)
                state.isLoading = false
            })
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(registerUser.fulfilled, (state, {payload}) => {
                const {user, access_token} = payload
                state.user = user
                state.user.token = access_token
                addUserToLocalStorage(state.user)
                state.isLoading = false
                toast.success(`Hello New User`)
            })
            .addCase(registerUser.rejected, (state, {payload}) => {
                state.isLoading = false
                toast.error(payload)
            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(loginUser.fulfilled, (state, {payload}) => {
                const {user, access_token} = payload
                state.user = user
                state.user.token = access_token
                addUserToLocalStorage(state.user)
                state.isLoading = false
                state.isSidebarOpen = true
                toast.success(`Welcome Back User`)
            })
            .addCase(loginUser.rejected, (state, {payload}) => {
                state.isLoading = false
                toast.error(payload)
            })
            .addCase(clearStore.rejected, () => {
                toast.error('There was an error')
            })
    }

})
export default userSlice.reducer
export const {toggleSidebar, logoutUser} = userSlice.actions
export {loginUser, registerUser, updateUser, clearStore}
