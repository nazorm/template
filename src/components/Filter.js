import React from "react";
import "../App.scss";
import searchIcon from "./assets/search-icon.svg";

const Filter = () => {
  return (
    <div className="header">
      <div className="searchbar-container">
        <input
          type="text"
          placeholder="Search Templates"
          className="searchbar"
        />
        <img src={searchIcon} alt="search" className="search-icon" />
      </div>

      <div className="filters-sect">
        <span className="label">Sort By:</span>
        <select className="filter">
          <option name="all">All</option>
          <option name="agriculture">Agriculture</option>
        </select>

        <select className="filter">
          <option name="default">Default</option>
        </select>

        <select className="filter">
          <option name="default">Default</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
