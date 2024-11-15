// src/components/TaskList.js
import React from 'react';
import Task from './Task';  // Import the Task component

function TaskList({ tasks, onDelete }) {
  return (
    <div>
      {tasks.map(task => (
        <Task key={task.id} task={task} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default TaskList;  // Make sure to export as default
