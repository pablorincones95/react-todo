import React from "react";
import "./TodoCounter.css";

function TodoCounter({ completedTodo, totalTodos }) {
  return (
    <h1 className="TodoCounter">
      Has completado
      <span> {completedTodo} </span>
      de
      <span> {totalTodos} </span>
      TODOS
    </h1>
  );
}

export { TodoCounter };
