import { useState } from 'react';

import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpensesList';
import './Expenses.css';

const Expenses = (pdict) => {
    const [filteredYear, setFilteredYear] = useState('2023');

    const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear);
    };

    const filteredExpenses = pdict.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

  


    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpenseList expenses = {filteredExpenses} />
        </Card>
    );
}

export default Expenses;