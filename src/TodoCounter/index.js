import React from "react";
import "./TodoCounter.css";

function TodoCounter({ completedTodo, totalTodos, loading }) {
  return (
    <h1 className={`TodoCounter ${loading && "TodoCounter--loading"}`}>
      Has completado
      <span> {completedTodo} </span>
      de
      <span> {totalTodos} </span>
      TODOS
    </h1>
  );
}

export { TodoCounter };
