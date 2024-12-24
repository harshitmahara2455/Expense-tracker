import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses,onDeleteExpense }) => {
  return (
    <ul>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id} // Use a unique key for each item
          name={expense.name}
          amount={expense.amount}
          date={expense.date}
          category={expense.category}
          onDelete={() => onDeleteExpense(expense.id)}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
