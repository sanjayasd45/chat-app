import {configureStore} from "@reduxjs/toolkit";
import themeSliceReducer from "./themeSlice";
import { refreshSidebar } from "./refreshSidbar";
import allUsers from "./slices/allUsers";
import previousChats from "./slices/previousChats";
import user from "./slices/user";
import sideBarSlice  from "./slices/sideBar";
import getChat from "./slices/liveChat"



export const store = configureStore({
    reducer : {
        themeKey : themeSliceReducer,
        refreshKey: refreshSidebar,
        allUsersKey : allUsers,
        previousChats : previousChats,
        userKey : user,
        sideBarSlice : sideBarSlice,
        getChat : getChat,
    }
})