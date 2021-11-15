import React from "react";

const FILTER_STATUS = {
  ALL: "all",
  OPEN: 0,
  CLOSED: 1,
};

const Filters = ({ filterValue, handleFilterChange }) => {
  return (
    <div className="filters">
      <label className="filters__item">
        <input
          type="radio"
          value="all"
          name="filter"
          checked={filterValue === FILTER_STATUS.ALL}
          onChange={handleFilterChange}
        />
        Show All
      </label>
      <label className="filters__item">
        <input
          type="radio"
          value="0"
          name="filter"
          checked={parseInt(filterValue) === FILTER_STATUS.OPEN}
          onChange={handleFilterChange}
        />
        Show Open
      </label>
      <label className="filters__item">
        <input
          type="radio"
          value="1"
          name="filter"
          checked={parseInt(filterValue) === FILTER_STATUS.CLOSED}
          onChange={handleFilterChange}
        />
        Show Closed
      </label>
    </div>
  );
};

export default Filters;
