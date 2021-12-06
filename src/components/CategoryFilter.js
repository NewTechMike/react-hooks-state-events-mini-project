import React from "react";

function CategoryFilter({categories, handleCategoryClick, clickedCat}) {

  const catButton = categories.map((category) => { 
    return (
      <button 
        className= {clickedCat === category ? "selected": " "}
        key={category} 
        onClick={ () => handleCategoryClick(category)}>
        {category}
      </button>
      )});

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {catButton}
    </div>
  );
}

export default CategoryFilter;
