import React from "react";
import Task from "./Task"

function TaskList({tasks, category, deleteButton}) {
  
  const listOfTasks = tasks.map((task, index)=> {
    return <Task 
      key={index} 
      text={task.text}
      category={task.category}
      onTaskDelete={deleteButton}
      />
  }) 
  
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {listOfTasks}
    </div>
  );
}

export default TaskList;
