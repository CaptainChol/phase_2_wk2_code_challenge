import React, { useState } from 'react';

const SortBar = ({ onSort }) => {
  const [sortBy, setSortBy] = useState('');

  const handleSortChange = (event) => {
    const selectedSort = event.target.value;
    setSortBy(selectedSort);
    onSort(selectedSort);
  };

  return (
    <div className="sort-bar">
      <label htmlFor="sort">Sort By:</label>
      <select id="sort" value={sortBy} onChange={handleSortChange}>
        <option value="">None</option>
        <option value="health">Health</option>
        <option value="damage">Damage</option>
        <option value="armor">Armor</option>
      </select>
    </div>
  );
};

export default SortBar;