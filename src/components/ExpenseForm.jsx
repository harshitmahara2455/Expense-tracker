import React from 'react'

const ExpenseForm = () => {
  return (
    <div>
        <form>
            <div>
                <label>Expense Name </label>
                <input  className="
                npm"type='text'>
                </input>
         
            </div>
            <div>
                <label>Amount</label>
                <input
                type="number">

                </input>
            </div>
            <div>
                <label>Date</label>
                <input type="date">
                </input>
            </div>
            <div>
                <label>Category</label>
                <select>
                    <option value="">Select Category</option>
                    <option value="Food">Food</option>
                    <option value="Rent">Rent</option>
                    <option value="Transport">Transport</option>
                    <option value="Entertainment">Entertainment</option>
                </select>

            </div>
            <button type='submit'>Submit</button>


        </form>

      
    </div>
  )
}

export default ExpenseForm
