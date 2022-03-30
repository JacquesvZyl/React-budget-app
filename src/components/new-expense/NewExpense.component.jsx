import React, { useState } from "react";
import ExpenseForm from "../expense-form/ExpenseForm.component";

import "./newExpense.styles.scss";
function NewExpense(props) {
  const { addTo } = props;
  const [isFormShowing, setFormShowing] = useState(false);

  function toggleForm() {
    setFormShowing((prevValue) => !prevValue);
  }

  return (
    <div className="new-expense">
      {isFormShowing ? (
        <ExpenseForm addTo={addTo} addToggle={toggleForm} />
      ) : (
        <button onClick={toggleForm}>Add New Expense</button>
      )}
    </div>
  );
}

export default NewExpense;
