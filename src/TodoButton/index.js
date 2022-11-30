import React from "react";
import "./TodoButton.css";

function TodoButton(props) {
  const onClickButton = () => {
    props.action();
  };

  return (
    <button
      className={`button ${props.type ? props.type : ""}`}
      onClick={onClickButton}
    >
      {props.text}
    </button>
  );
}

export { TodoButton };
