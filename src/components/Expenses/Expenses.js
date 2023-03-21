import { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (pdict) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear);
    };

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {pdict.expenses.map((expense) => (
                <ExpenseItem 
                    key={expense.id}
                    date={expense.date} 
                    title={expense.title} 
                    amount={expense.amount} 
                />
            ))}
        </Card>
    );
}

export default Expenses;