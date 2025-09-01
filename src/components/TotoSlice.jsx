import { createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice({
    name:'todos',
    initialState:[],
    reducers:{
        addTodos:(state,action)=>{
            state.push({text:action.payload})
        },
        removeTodo:(state,action)=>{
            state.splice(action.payload,1)
        }
    }
})
const countSlice = createSlice({
    name:'counter',
    initialState:{value:0},
    reducers:{
       increment:(state)=>{state.value +=1},
        decrement:(state)=>{state.value -=1}
    }
})
export const {addTodos,removeTodo} = todoSlice.actions;
export const {increment,decrement} =countSlice.actions;
export const todoReducer = todoSlice.reducer;
export const countReducer = countSlice.reducer;