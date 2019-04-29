import React from 'react';

const SearchBar = ({sort, updateSort, updateFilter}) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="alphabetically" checked={sort === "alphabetically"} onChange={updateSort}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="price" checked={sort === "price"} onChange={updateSort}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={updateFilter}>
          <option value="">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
