import React, { useState } from "react";
import "./expenseForm.styles.scss";

function ExpenseForm(props) {
  const { addTo, addToggle } = props;
  const [formData, setFormData] = useState({ title: "", amount: "", date: "" });

  function onSubmitHandler(e) {
    e.preventDefault();
    const updatedData = {
      title: formData.title,
      amount: Number(formData.amount),
      date: new Date(formData.date),
    };
    addTo(updatedData);
    setFormData({ title: "", amount: "", date: "" });
    addToggle();
  }

  function onChangeHandler(e) {
    const { name, value } = e.target;
    setFormData((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            onChange={onChangeHandler}
            name="title"
            value={formData.title}
            type="text"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={onChangeHandler}
            name="amount"
            value={formData.amount}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={onChangeHandler}
            name="date"
            value={formData.date}
            type="date"
            min="2021-01-01"
            max="2025-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={addToggle}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
