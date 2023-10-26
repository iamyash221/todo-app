import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="todo">
      <p
        onClick={() => toggleComplete(task.id)}
        className={`${task.completed ? "completed" : ""}`}
      >
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon
          onClick={() => editTodo(task.id)}
          icon={faPenToSquare}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => deleteTodo(task.id)}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
};
