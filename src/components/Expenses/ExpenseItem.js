import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (pdict) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={pdict.date} />
        <div className="expense-item__description">
          <h2>{ pdict.title }</h2>
          <div className="expense-item__price">
            <span>${pdict.amount}</span>
          </div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
