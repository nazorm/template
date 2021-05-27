import React from "react";
import searchIcon from "./assets/search-icon.svg";

const Filter = () => {
  return (
    <div className="search-heading">
        <div>
        <input type="text" placeholder="Search Templates" />
        <img src={searchIcon} alt="search"/>
        </div>
     
      <div className="filters-sect">
          <select className="category-filter">
              <option name="all">All</option>
              <option name="agriculture">Agriculture</option>
          </select>

          <select className="order-filter">
              <option name="default">Default</option>
          </select>

          <select className="date-filter">
              <option name="default">Default</option>
          </select>
      </div>
    </div>
  );
};

export default Filter;
