import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sideBarChat as sideChat } from "../../Apis/userApis";

export const sideBarChat = createAsyncThunk(
    "sideBarSlice",
    sideChat
)
export const sideBarSlice = createSlice({
    name : "sideBarSlice",
    initialState : {
        loading : false,
        list : [],
        error : ""
    },
    // reducers : {

    // },
    extraReducers: (builder) => {
        builder
          .addCase(sideBarChat.pending, (state) => {
            state.loading = true
          })
          .addCase(sideBarChat.fulfilled, (state, action) => {
            state.loading = false
            state.list = action.payload
            state.error = ''
          })
          .addCase(sideBarChat.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload || 'Something went wrong!'
          })
      },
})
// export const sideBarChatData = (state) => state.sideBarSlice.list
// export const sideBarChatLoadingState = (state) => state.sideBarSlice.loading
// export const sideBarChatError = (state) => state.sideBarSlice.error

export default sideBarSlice.reducer