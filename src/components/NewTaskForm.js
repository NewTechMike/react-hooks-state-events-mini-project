import React, { useState  } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [newTask, setNewTask ] = useState("")
  const [category, setCategory ] = useState("Code")


  const catOptions = categories.map((category) => {
    return <option key={category}>{category}</option>
  })

  function handleDetailChange(event){
    setNewTask(event.target.value)
  }

  function handleCatChange(event){
    setCategory(event.target.value)
  }
  function handleSubmit(event){
    event.preventDefault();
    const newObject = {
      text: newTask,
      category: category
    }
    onTaskFormSubmit(newObject);
  }

  return (
    <form onSubmit={handleSubmit} className="new-task-form" >
      <label>
        Details
        <input 
          onChange={handleDetailChange} 
          type="text" 
          name="text" 
          value={newTask}
        />
      </label>
      <label>
        Category
        <select 
        onChange={handleCatChange} 
        name="category"
        value={category}
        >
          {/* render <option> elements for each category here */}
          {catOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
