import React, { useState } from "react";
import "./expensesFilter.styles.scss";

function ExpensesFilter(props) {
  const { filteredChangeHandler, selected } = props;

  function onYearChangeHandler(e) {
    filteredChangeHandler(e.target.value);
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={selected} onChange={onYearChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </div>
    </div>
  );
}

export default ExpensesFilter;
