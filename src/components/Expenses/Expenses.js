import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (pdict) => {


    return (
        <Card className="expenses">
            <ExpenseItem date={pdict.expenses[0].date} title={pdict.expenses[0].title} amount={pdict.expenses[0].amount} />
            <ExpenseItem date={pdict.expenses[1].date} title={pdict.expenses[1].title} amount={pdict.expenses[1].amount} />
            <ExpenseItem date={pdict.expenses[2].date} title={pdict.expenses[2].title} amount={pdict.expenses[2].amount} />
        </Card>
    );
}

export default Expenses;