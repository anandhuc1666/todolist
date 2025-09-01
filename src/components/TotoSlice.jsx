// import { createSlice } from "@reduxjs/toolkit";

// const todoSlice = createSlice({
//     name:'todo',
//     initialState:[],
//     reducers:{
//         addTodo:(state,action)=>{
//          state.push({text:action.payload})
//         },
//         removeTodo:(state,action)=>{
//             // return state.filter((t)=>t.id!==action.payload)
//             state.splice(action.payload, 1);
//         }
//     }
// })
// export const {addTodo,removeTodo} = todoSlice.actions;
// export default todoSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:'todo',
   initialState: [],
    reducers:{
        addTodo:(state,action)=>{
            state.push({text:action.payload})
        },
        removeTodo:(state,action)=>{
            state.splice(action.payload,1)
            
        }
    }
})
export const {addTodo,removeTodo} = todoSlice.actions;
export default todoSlice.reducer;