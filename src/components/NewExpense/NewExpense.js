import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


const NewExpense = (props) => {
    const saveData = (enteredData) => {
        const expenseData = {
            ...enteredData,
            id: Math.random().toString()
        }
        
        props.setExpenseHandler(expenseData)
        setisShowExpenseForm(false);
    }

    const [isShowExpenseForm, setisShowExpenseForm] = useState(false);
    const onExpenseAdd = () => {
        setisShowExpenseForm(true);
    }

    const onExpenseClose = () => {
        setisShowExpenseForm(false);
    }

    return (
        <div className="new-expense">
            {isShowExpenseForm ? 
            <ExpenseForm saveDataHandler = {saveData}  onCloseHandler = {onExpenseClose} /> :
            <button onClick={onExpenseAdd}>Add New Expense</button>}
            
            
        </div>
    );
};

export default NewExpense;