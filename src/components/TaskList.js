import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div>
      {tasks.map((task ,index) => (
        <Task
          key={task.id || index} // Use the unique ID as the key
          text={task.text}
          category={task.category}
          onDeleteTask={() => onDeleteTask(task.text)} // Pass the ID for deletion
        />
      ))}
    </div>
  );
}

export default TaskList;
