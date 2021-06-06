import React from "react";
import "../App.scss";
import searchIcon from "./assets/search-icon.svg";

const Filter = ({
  handleOrder,
  handleDate,
  handleSearchChange,
  handleSearch,
}) => {
  return (
    <div className="header">
      <div className="searchbar-container">
        <input
          type="text"
          placeholder="Search Templates"
          className="searchbar"
          onChange={handleSearchChange}
        />
        <img
          src={searchIcon}
          alt="search"
          className="search-icon"
          onClick={handleSearch}
        />
      </div>

      <div className="filters-sect">
        <span className="label">Sort By:</span>
        <div className="filter-container">
          <span className="select-label">Category</span>
          <select className="filter">
            <option name="all">All</option>
            <option name="agriculture">Agriculture</option>
          </select>
        </div>

        <div className="filter-container">
          <span className="select-label">Order</span>
          <select className="filter" onChange={handleOrder}>
            <option value="default">Default</option>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </div>
        <div className="filter-container">
          <span className="select-label">Date</span>
          <select className="filter" onChange={handleDate}>
            <option value="default">Default</option>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
