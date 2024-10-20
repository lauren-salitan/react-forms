import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function NewTodoForm({ addTodo }) {
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ task, id: uuid() });
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">New Todo: </label>
      <input id="task" value={task} onChange={handleChange} />
      <button>Add Todo</button>
    </form>
  );
}

export default NewTodoForm;
