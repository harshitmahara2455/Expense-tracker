import React, { useState, useEffect } from 'react';

import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm'
const App = () => {
  // State to store the list of expenses
  const [expenses, setExpenses] = useState([]);

  // Load expenses from localStorage when the app initializes
  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem('expenses'));
    if (storedExpenses) {
      setExpenses(storedExpenses);
    }
  }, []);

  // Save expenses to localStorage whenever the expenses state changes
  useEffect(() => {
    if (expenses.length > 0) {
      localStorage.setItem('expenses', JSON.stringify(expenses));
    }
  }, [expenses]);

  // Function to add a new expense
  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  // Function to delete an expense
  const deleteExpense = (id) => {
    setExpenses((prevExpenses) => {
      const updatedExpenses = prevExpenses.filter((expense) => expense.id !== id);
      localStorage.setItem('expenses', JSON.stringify(updatedExpenses)); // Save updated expenses to localStorage
      return updatedExpenses;
    });
  };
  

  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div className='flex items-center justify-center bg-blue-200 w-screen h-screen'>
      <ExpenseForm onAddExpense={addExpense} />
      
      <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
      <h2>Total Expenses: ₹{totalExpenses.toFixed(1)}</h2>
    </div>
  );
};

export default App;
