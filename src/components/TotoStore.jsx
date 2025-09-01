// import { configureStore } from "@reduxjs/toolkit";
// import todoReduser from './TotoSlice'

// const store = configureStore({
//     reducer:{
//     todos:todoReduser
//     }
// })
// export default store
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./TotoSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;