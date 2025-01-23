import React, {useState} from "react";

const FilterDropdown = ({onFilterChange}) => {
  const [selectedFilter, setSelectedFilter] = useState("Most Recent");

  const filters = [
    "Most Recent",
    "Price: Low to High",
    "Price: High to Low",
    "Top Rated",
  ];

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    onFilterChange(filter); // Notify parent component about the filter change
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-outline-primary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {selectedFilter}
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {filters.map((filter, index) => (
          <li key={index}>
            <button
              className="dropdown-item"
              onClick={() => handleFilterChange(filter)}
            >
              {filter}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterDropdown;
