import './App.css';
// import Home from './component/Home';
import ExpenseItem from './component/ExpenseItem';
import React, { useState } from 'react';

function App() {
  const expense = [
    {
    id:'e1',
    title: 'car insurance',
    amount: 290,
    date :new Date(2021, 3, 18)
    },
    {
      id : 'e2',
      title: 'study fees',
      amount: 690,
      date :new Date(2021, 2, 28)
    },
    {
      id : 'e3',
      title: 'food expense',
      amount: 240,
      date :new Date(2022, 3, 10)
    }
  ];
  return (
    <div className="App">
      {/* <Home name="Enter Your Name" email="Enter your email" mobile="Enter your mobile" password="Enter your password"/> */}
      <ExpenseItem title={expense[0].title} amount={expense[0].amount} date={expense[0].date} />
      <ExpenseItem title={expense[1].title} amount={expense[1].amount} date={expense[1].date} />
      <ExpenseItem title={expense[2].title} amount={expense[2].amount} date={expense[2].date} />
    </div>
  );
}

export default App;
