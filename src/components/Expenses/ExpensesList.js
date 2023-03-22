import './ExpensesList.css';
import ExpenseItem from "./ExpenseItem";
const ExpensesList = ( props ) => {

    if (props.expenses.length === 0) {
        return <h2>Found no expense</h2>       
    }

    return (
        <ul className='expense-list'>
            {props.expenses.map((expense) => (
                <ExpenseItem 
                    key={expense.id}
                    date={expense.date} 
                    title={expense.title} 
                    amount={expense.amount} 
                />
            ))}
        </ul>
    )
}

export default ExpensesList;