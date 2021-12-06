import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log("Called from App: ",{ CATEGORIES, TASKS });

function App() {
  const [taskState, setTaskState] = useState(TASKS)
  const [clickedCat, setClickedCat] = useState("All")
  
  function handleDelete(text){
    const newState = taskState.filter((task) => task.text !== text) 
    setTaskState(newState);
  }
  function handleAdd(newObject){
    const newState = [...taskState, newObject]
    setTaskState(newState);
  }
  function handleCategoryClick(selectedCat){
    console.log("Yay button was clicked")
    setClickedCat(selectedCat)
  }

  const newSelectedTasks = taskState.filter((task) => {
    if(clickedCat === "All") return true;
    else{
      return task.category === clickedCat 
  }})
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={CATEGORIES}
      clickedCat={clickedCat}
      handleCategoryClick={handleCategoryClick}
      />
      <NewTaskForm 
      categories={CATEGORIES.filter(cat=> cat !== "All")}
      onTaskFormSubmit={handleAdd}
      />
      <TaskList tasks={newSelectedTasks} deleteButton={handleDelete}/>
    </div>
  );
}

export default App;
