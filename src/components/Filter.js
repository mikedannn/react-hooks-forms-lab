import React from "react";

function Filter({ onCategoryChange, onSearchChange, search }) {
  return (
    <div className="Filter">
      <input type="text" name="search" placeholder="Search..." onChange={onSearchChange} value={search}/>
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce" name="Produce">Produce</option>
        <option value="Dairy" name="Dairy">Dairy</option>
        <option value="Dessert" name="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
