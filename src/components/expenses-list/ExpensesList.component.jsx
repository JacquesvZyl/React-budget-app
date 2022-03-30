import React from "react";
import "./expensesList.styles.scss";
import ExpenseItem from "../expense-item/ExpenseItem.component";

function ExpensesList(props) {
  const { filteredExpenses } = props;

  if (!filteredExpenses.length) {
    return <h2 className="expenses-list__fallback">No Expenses Found</h2>;
  }

  return (
    <ul className="expenses-list">
      {filteredExpenses.map((expense, i) => (
        <ExpenseItem
          key={i}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
