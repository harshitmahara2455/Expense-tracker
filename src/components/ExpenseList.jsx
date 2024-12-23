import React from 'react'
import ExpenseItem from './ExpenseItem'

const ExpenseList = () => {
  
 
  
  
  
  
  
    return (
        (
            <ul>
              {expenses.map((expense) => (
                <ExpenseItem
                  key={expense.id} // Use a unique key for each item
                  name={expense.name}
                  amount={expense.amount}
                  date={expense.date}
                  category={expense.category}
                />
              ))}
            </ul>
          )

  )
}

export default ExpenseList
