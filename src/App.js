import React, { useState, useEffect } from "react";
import "./App.css";
// import Expenseitem from "./components/Expenseitem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

const DUMMY_EXPENSES = [
  { id:1, title: "petrol", amount: 100, date: new Date(2022, 10, 31) },
  { id:2, title: "car insurance", amount: 1000, date: new Date(2022, 10, 30) },
  { id:3, title: "toilet paper", amount: 200, date: new Date(2022, 10, 29) },
  { id:4, title: "grocery", amount: 500, date: new Date(2022, 11, 31) },
];
const App = () =>{

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
    console.log('APP.JS  expense');
  }
  useEffect(() => console.log(expenses), [expenses])
  return (
    <div>
      <NewExpense onAddExpenseData={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  ) 
  // return React.createElement(
  //   'div',{},
  //   React.createElement('h2',{}, 'Lets get started'),
  //   React.createElement(Expenses, {item:expenses})
  // );
}

export default App;