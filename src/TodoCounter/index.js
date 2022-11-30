import React from "react";
import "./TodoCounter.css";

function TodoCounter({ totalTodos, completedTodos, loading }) {
  return (
    <React.Fragment>
      <h1 className="your-tasks">Your Tasks</h1>

      <h2 className={`TodoCounter ${!!loading && "TodoCounter--loading "}`}>
        Completed {completedTodos} to {totalTodos}
      </h2>
    </React.Fragment>
  );
}

export { TodoCounter };
