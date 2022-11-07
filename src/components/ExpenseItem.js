import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
	return (
		<div className="expense-item">
			<div className="expense-item__price">${props.amount}</div>
			<h2 className="expense-item__title">{props.title}</h2>
			<ExpenseDate date={props.date} />
		</div>
	);
}

export default ExpenseItem;
