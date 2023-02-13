import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      date: new Date(2023, 2, 8),
      title: "Car Insurance",
      amount: 295.67,
    },
    {
      date: new Date(2023, 2, 10),
      title: "Home Warranty",
      amount: 598.0,
    },
    {
      date: new Date(2023, 2, 11),
      title: "HOA",
      amount: 482.0,
    },
  ];

  const expenseHandler = expense => {
    console.log(expense);
  }

  return (
    <div className="App">
      <NewExpense setExpenseHandler = { expenseHandler }/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
