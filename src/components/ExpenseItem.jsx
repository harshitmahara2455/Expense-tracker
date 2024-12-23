import React from "react";

const ExpenseItem = ({ name, amount, date, category }) => {
  // Use Intl.NumberFormat for currency formatting
  const formattedAmount = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
  }).format(amount);

  return (
    <li className="expense-item">
      <div className="expense-item__left">
        <h3 className="expense-item__name">{name}</h3>
        <p className="expense-item__date">{new Date(date).toLocaleDateString()}</p>
      </div>
      <div className="expense-item__right">
        <p className="expense-item__amount">{formattedAmount}</p>
        <p className="expense-item__category">{category}</p>
      </div>
    </li>
  );
};

export default ExpenseItem;

