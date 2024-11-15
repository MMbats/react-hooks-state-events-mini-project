// src/components/NewTaskForm.js
import React, { useState } from 'react';

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState('');
  const [category, setCategory] = useState(categories[0]);

  function handleSubmit(event) {
    event.preventDefault();
    onTaskFormSubmit({ text, category });
    setText('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        required 
      />
      <select 
        value={category} 
        onChange={(e) => setCategory(e.target.value)} 
      >
        {categories.map((cat, index) => cat !== "All" && (
          <option key={index} value={cat}>{cat}</option>
        ))}
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default NewTaskForm;  // Make sure to export as default
