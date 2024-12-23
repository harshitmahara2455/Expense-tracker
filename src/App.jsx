import React from 'react'
import Header from './components/Header'
import ExpenseForm from './components/ExpenseForm'
import ExpenseItem from './components/ExpenseItem'

const App = () => {
  return (
    <div>
      <Header/>
      <ExpenseForm/>
      <ExpenseItem/>
  
    </div>
  )
}


export default App
