import React from "react";
import "./expenseItem.styles.scss";
import ExpenseDate from "../expense-date/ExpenseDate.component";
import Card from "../card/Card.component";

function ExpenseItem(props) {
  const { amount, date, title } = props;

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
