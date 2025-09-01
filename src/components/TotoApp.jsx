import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "./TotoSlice";

function TotoApp() {
  const [task, setTask] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (task.trim() !== "") {
      dispatch(addTodo(task));
      setTask("");
    }
  };
  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Enter new item"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map((t, index) => (
          <li key={index}>
            {t.text}
           <button onClick={()=>dispatch(removeTodo(index))} > delt</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TotoApp;
