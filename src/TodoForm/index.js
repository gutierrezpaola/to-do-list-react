import React from "react";
import "./TodoForm.css";
import { TodoButton } from "../TodoButton";

function TodoForm({ addTodo, setOpenModal }) {
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCalcel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Task Name</label>
      <textarea value={newTodoValue} onChange={onChange} />
      <div className="TodoForm-buttonContainer">
        <TodoButton type="primary-btn" text="Cancel" action={onCalcel} />
        <TodoButton type="secondary-btn" text="Add" />
      </div>
    </form>
  );
}

export { TodoForm };
