import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
	return (
		<Card className="expense-item">
			<div className="expense-item__price">${props.amount}</div>
			<h2 className="expense-item__title">{props.title}</h2>
			<ExpenseDate date={props.date} />
		</Card>
	);
}

export default ExpenseItem;
