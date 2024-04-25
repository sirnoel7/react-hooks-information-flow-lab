import React from "react";

function Filter({ onCategoryChange }) {
  function handleCategoryChange(event) {
    const selectedCategory = event.target.value;
    onCategoryChange(selectedCategory);
  }

  return (
    <div className="Filter">
      <select name="filter" onChange={handleCategoryChange}>
        <option value="everything">everything</option>
        <option value="is">is</option>
        <option value="slightly">slightly</option>
        <option value="challemging">challenging</option>
      </select>
    </div>
  );
}

export default Filter;
