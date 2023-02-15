import { combineReducers, createStore } from "redux";
import { authReduser } from "./reducer/authReducer/authReducer";
import { todoReducer } from "./reducer/todoReducer/todoReducer";

export const rootReducer = combineReducers({
    todo: todoReducer,
    auth:authReduser,
})
export const store = createStore(rootReducer)