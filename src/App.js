import "./App.css";
import { useState } from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const dummyexpenses = [
    {
      id: 'e1',
      date: new Date(2022, 2, 8),
      title: "Car Insurance",
      amount: 295.67,
    },
    {
      id: 'e2',
      date: new Date(2023, 0, 10),
      title: "Home Warranty",
      amount: 598.0,
    },
    {
      id: 'e3',
      date: new Date(2023, 1, 11),
      title: "HOA",
      amount: 482.0,
    },
    {
      id: 'e4',
      date: new Date(2021, 6, 10),
      title: "Health Insurance",
      amount: 200.0,
    },
    {
      id: 'e5',
      date: new Date(2022, 9, 10),
      title: "Insurance",
      amount: 150.0,
    },
    {
      id: 'e6',
      date: new Date(2023, 3, 10),
      title: "Groceries",
      amount: 12.0,
    },
    {
      id: 'e7',
      date: new Date(2022, 6, 19),
      title: "Gas Bill",
      amount: 68.0,
    },
    {
      id: 'e8',
      date: new Date(2021, 3, 10),
      title: "Water Bill",
      amount: 48.0,
    },
    {
      id: 'e9',
      date: new Date(2022, 7, 10),
      title: "Electric Bill",
      amount: 65.0,
    },
    {
      id: 'e10',
      date: new Date(2022, 12, 10),
      title: "Home Mortgage",
      amount: 2500.0,
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
