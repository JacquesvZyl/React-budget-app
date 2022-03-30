import React from "react";
import "./expense-date.styles.scss";

function ExpenseDate(props) {
  const { date } = props;
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();
  const day = date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
