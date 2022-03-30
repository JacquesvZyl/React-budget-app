import React, { useState } from "react";
import "./expenses.styles.scss";
import Card from "../card/Card.component";
import ExpensesFilter from "../expenses-filter/ExpensesFilter.component";
import ExpensesList from "../expenses-list/ExpensesList.component";
import ExpensesChart from "./ExpensesChart.component";

function Expenses(props) {
  const { expenses } = props;
  const [filteredYear, setFilteredYear] = useState("2022");

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  function filteredChangeHandler(year) {
    setFilteredYear(year);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        filteredChangeHandler={filteredChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
