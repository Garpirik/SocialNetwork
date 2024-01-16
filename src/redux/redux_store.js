import { configureStore } from "@reduxjs/toolkit";
import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux"; 
import authReducer from "./authReducer";
import messagesPageReducer from "./messagesPageReducer";
import profileDataReducer from "./profileDataReducer";
import sidebarReducer from "./sidebarReducer";
import usersPageReducer from "./usersPageReducer";
import {thunk as thunkMidleware} from "redux-thunk";
import {reducer as formReducer} from "redux-form"

const reducers = combineReducers({
    profileData: profileDataReducer,
    messagesPage: messagesPageReducer,
    sidebar: sidebarReducer,
    usersPageReducer: usersPageReducer,
    auth: authReducer,
    form: formReducer
})
let store = createStore(reducers, applyMiddleware(thunkMidleware))
window.store = store;

export default store;
