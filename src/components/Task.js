import React from "react";

function Task({ text, category, onDeleteTask }) {
  return (
    <div className="task" role="listitem">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={onDeleteTask}>
        X
      </button>
    </div>
  );
}

export default Task;

