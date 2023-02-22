import { configureStore } from "@reduxjs/toolkit";
import { combineReducers  } from "redux";
import { authSlice } from "./reducer/authReducer/authSlice";
import { todoSlice } from "./reducer/todoReducer/todoSlice";

const rootReducer = combineReducers({
    [authSlice.name]: authSlice.reducer,
    [todoSlice.name]: todoSlice.reducer,
})
export const store = configureStore({reducer: rootReducer})