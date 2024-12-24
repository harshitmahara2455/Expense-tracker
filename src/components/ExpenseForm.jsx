import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  console.log({ name, amount, date, category });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || ! amount ||!date ||! category){
        alert('please fill in all field')
        return
    }
    if(amount < 0){
        alert('amount cant be negative')
    }


    // Create a new expense object
    const newExpense = {
      id: Math.random().toString(), // Generate a random id (you can improve this later)
      name,
      amount: parseFloat(amount),
      date,
      category,
    };

    // Pass the new expense to the parent (App component)
    onAddExpense(newExpense);

    // Reset form fields
    setName('');
    setAmount('');
    setDate('');
    setCategory('');
  };

  return (
    <div className='bg-white
    '>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Expense Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div>
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label>Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="Food">Food</option>
            <option value="Rent">Rent</option>
            <option value="Transport">Transport</option>
            <option value="Entertainment">Entertainment</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
