import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {configureStore} from "@reduxjs/toolkit";

export type StoreType = typeof store

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
});

// export const store = configureStore({reducer: {reducers}});
export const store = createStore(reducers);