import { FaPlus } from "react-icons/fa";
import "./CreateTodoButton.css";
import React from "react";

function CreateTodoButton({ setOpenModal }) {
  const toggleOpenModal = () => {
    setOpenModal((prevState) => !prevState); // Alterna el valor actual del estado
  };

  return (
    <button className="CreateTodoButton" onClick={toggleOpenModal}>
      <FaPlus />
    </button>
  );
}

export { CreateTodoButton };
