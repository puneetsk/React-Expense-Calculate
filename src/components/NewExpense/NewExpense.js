import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


const NewExpense = (props) => {
    const saveData = (enteredData) => {
        const expenseData = {
            ...enteredData,
            id: Math.random().toString()
        }
        
        props.setExpenseHandler(expenseData)
    }

    return (
        <div className="new-expense">
            <ExpenseForm saveDataHandler = {saveData} />
        </div>
    );
};

export default NewExpense;