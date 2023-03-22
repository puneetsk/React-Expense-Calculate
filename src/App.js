import "./App.css";
import { useState } from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const dummyexpenses = [
    {
      id: 'e1',
      date: new Date(2023, 2, 8),
      title: "Car Insurance",
      amount: 295.67,
    },
    {
      id: 'e2',
      date: new Date(2023, 2, 10),
      title: "Home Warranty",
      amount: 598.0,
    },
    {
      id: 'e3',
      date: new Date(2023, 2, 11),
      title: "HOA",
      amount: 482.0,
    },
  ];

  const [expenses, setExpense] = useState(dummyexpenses);

  const expenseHandler = (expense) => {
    setExpense((prevExpense) => {
      return [expense, ...prevExpense];
    })
  }

  return (
    <div className="App">
      <h1>Expense Calculator</h1>
      <NewExpense setExpenseHandler = { expenseHandler }/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
