import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.scss";

function ExpenseItem(props) {
	return (
		<div className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__content">
				<h2 className="expense-item__title">{props.title}</h2>
				<div className="expense-item__price">${props.amount}</div>
			</div>
		</div>
	);
}

export default ExpenseItem;
