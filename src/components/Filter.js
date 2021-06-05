import React from "react";
import "../App.scss";
import searchIcon from "./assets/search-icon.svg";

const Filter = ({handleOrder, handleDate}) => {
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
            <option name="default">Default</option>
            <option name="ascending">Ascending</option>
            <option name="descending">Descending</option>
          </select>
        </div>
        <div className="filter-container">
          <span className="select-label">Date</span>
          <select className="filter" onChange={handleDate}>
            <option name="default">Default</option>
            <option name="ascending">Ascending</option>
            <option name="descending">Descending</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
