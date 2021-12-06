import React from "react";

function Task({text, category, onTaskDelete}) {
  
  function handleDeleteClick(){
    onTaskDelete(text)
  }
  return (
    <div className="task">
      <div className="label" value={category}>{category}</div>
      <div className="text" value={text}>{text}</div>
      <button className="delete" onClick={handleDeleteClick}>X</button>
    </div>
  );
}

export default Task;
