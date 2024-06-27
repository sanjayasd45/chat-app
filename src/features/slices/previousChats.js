import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { previousChats as preChats } from '../../Apis/chatApis'
// const baseUrl = import.meta.env.VITE_SERVER_BASE_URL;


export const getPreviousChats = createAsyncThunk(
    "getPreviousChats",
    preChats
)
const previousChats  = createSlice({
    name : "getPreviousChats",
    initialState: {
        loading: false,
        list: [],
        error: '',
    },
    extraReducers: (builder) => {
        builder
          .addCase(getPreviousChats.pending, (state) => {
            state.loading = true
          })
          .addCase(getPreviousChats.fulfilled, (state, action) => {
            state.loading = false
            state.list = action.payload
            state.error = ''
          })
          .addCase(getPreviousChats.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload || 'Something went wrong!'
          })
      },
})

export const getPreviousChatsData = (state) => state.getPreviousChats.list
export const getPreviousChatsLoadingState = (state) => state.getPreviousChats.loading
export const getPreviousChatsError = (state) => state.getPreviousChats.error


export default previousChats.reducer