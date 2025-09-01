import React, { useState } from 'react'
import { addTodos, removeTodo,increment,decrement } from './TotoSlice'
import { useSelector, useDispatch } from 'react-redux'
function TotoApp() {
    const [task, setTaske] = useState("");
    const todos = useSelector((state) => state.todos);
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch()
    const handle =()=>{
         dispatch(addTodos(task))
    }
    return (
        <div>
          <h1>todoList</h1>
          <input type="text" placeholder='enter your list' value={task} onChange={(e)=>setTaske(e.target.value)}/>
          <button onClick={handle}>add</button>
          <ul>
            {
                
                todos.map((t,index)=>(
                    <li key={index}>
                          {t.text}
                          <button onClick={()=>dispatch(removeTodo(index))}>delt</button>
                    </li>
                ))
            }
          </ul>
          <h1>{count}</h1>
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    )
}

export default TotoApp