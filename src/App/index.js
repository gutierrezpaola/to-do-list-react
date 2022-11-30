import React from "react";
import { useTodos } from "./useTodos";
import { TodoHeader } from "../TodoHeader";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoButton } from "../TodoButton";
import { TodoForm } from "../TodoForm";
import { Modal } from "../Modal";
import "./App.css";

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
  } = useTodos();

  return (
    <div className="main-container">
      <div className="information-container">
        <div className="left-side">
          <h1>Create a new task</h1>
          <TodoButton
            type="primary-btn"
            text="Create Task"
            action={() => setOpenModal((prevState) => !prevState)}
          />
          <img src="/assets/phone-img.png" alt="logo" />
        </div>
        <div className="right-side">
          <TodoHeader loading={loading}>
            <TodoCounter
              totalTodos={totalTodos}
              completedTodos={completedTodos}
            />
            <TodoSearch
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          </TodoHeader>

          <TodoList>
            {error && <p>Failed to load</p>}
            {loading && <p>Loading...</p>}
            {/* {!loading && !searchedTodos.length && (
              <p>¡Create your first task!</p>
            )} */}

            {searchedTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>

          <div className="button-hidden">
            <TodoButton
              type="circle-btn"
              text="+"
              action={() => setOpenModal((prevState) => !prevState)}
            />
          </div>

          {!!openModal && (
            <Modal>
              <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
