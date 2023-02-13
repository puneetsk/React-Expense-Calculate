import "./ExpenseDate.css";

 const ExpenseDate = (pdict) => {
  const month = pdict.date.toLocaleString("en-US", { month: "long" });
  const date = pdict.date.toLocaleString("en-US", { day: "2-digit" });
  const year = pdict.date.getFullYear();


  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{date}</div>
      <div className="expense-date__day">{year}</div>
    </div>
  );
}

export default ExpenseDate;