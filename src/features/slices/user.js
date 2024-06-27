import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUser as me } from "../../Apis/userApis";
// const baseUrl = import.meta.env.VITE_SERVER_BASE_URL;


export const getUser = createAsyncThunk(
    "getUser",
    me
)
const user  = createSlice({
    name : "getUser",
    initialState: {
        loading: false,
        list: [],
        error: '',
    },
    reducers : {
        setUserData : (state , action) => {
          state.list = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(getUser.pending, (state) => {
            state.loading = true
          })
          .addCase(getUser.fulfilled, (state, action) => {
            state.loading = false
            state.list = action.payload
            state.error = ''
          })
          .addCase(getUser.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload || 'Something went wrong!'
          })
      },
})

export const getUserData = (state) => state.getUser.list
export const getUserLoadingState = (state) => state.getUser.loading
export const getUserError = (state) => state.getUser.error
export const {setUserData} = user.actions


export default user.reducer