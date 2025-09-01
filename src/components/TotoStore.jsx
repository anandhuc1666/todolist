import { configureStore } from "@reduxjs/toolkit";
import { todoReducer, countReducer } from "./TotoSlice";

const store = configureStore({
    reducer:{
        todos: todoReducer,
        counter: countReducer
    }
})
export default store