import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCurrentChat as getLiveChat } from "../../Apis/chatApis";

export const getCurrentChat = createAsyncThunk(
    "getChat",
    getLiveChat
)
const getChat = createSlice({
    name : "getChat",
    initialState : {
        loading : false,
        list : [],
        error : ""
    },
    reducers : {
        saveChat : (state, action) => {
            state.list.push(action.payload);
        }
    },
    extraReducers : (builder) => {
        builder
         .addCase(getCurrentChat.pending, (state) => {
            state.loading = true
         })
         .addCase(getCurrentChat.fulfilled, (state, action) => {
            state.loading = false,
            state.list = action.payload,
            state.error = ''
         })
         .addCase(getCurrentChat.rejected, (state, action) => {
            state.loading = false,
            state.error = action.payload || "something went wrong"
         })
    }
})
export const {saveChat} = getChat.actions
export default getChat.reducer