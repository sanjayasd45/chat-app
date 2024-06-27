import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllUsers as users } from "../../Apis/userApis";
// const baseUrl = import.meta.env.VITE_SERVER_BASE_URL;


export const getAllUsers = createAsyncThunk(
    "getAllUsers",
    users
)
const allUsers  = createSlice({
    name : "getAllUsers",
    initialState: {
        loading: false,
        list: [],
        error: '',
    },
    extraReducers: (builder) => {
        builder
          .addCase(getAllUsers.pending, (state) => {
            state.loading = true
          })
          .addCase(getAllUsers.fulfilled, (state, action) => {
            state.loading = false
            state.list = action.payload
            state.error = ''
          })
          .addCase(getAllUsers.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload || 'Something went wrong!'
          })
      },
})

export const getAllUsersData = (state) => state.getAllUsers.list
export const getAllUsersLoadingState = (state) => state.getAllUsers.loading
export const getAllUsersError = (state) => state.getAllUsers.error


export default allUsers.reducer