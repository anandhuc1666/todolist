import { configureStore } from "@reduxjs/toolkit";
import todoReduser from './TotoSlice'

const store = configureStore({
    reducer:{
    todos:todoReduser
    }
})
export default store