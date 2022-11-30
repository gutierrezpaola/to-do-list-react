import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        onClick={props.onComplete}
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
      >
        <i className="bi bi-check2-circle"></i>
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span onClick={props.onDelete} className="Icon Icon-delete">
        <i className="bi bi-trash"></i>
      </span>
    </li>
  );
}

export { TodoItem };
