import "./ExpenseItem.css";
import EXpenseDate from "./ExpenseDate";

function ExpenseItem(props) {

  return (
    <div className="expense-item">
      <EXpenseDate date = {props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price"> {props.amount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
