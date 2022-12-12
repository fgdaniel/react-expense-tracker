import Card from "../UI/Card";
import ExpenseDate from "../Expenses/Date";
import "./Item.css";
const ExpenseItem = (props) => {
	return (
		<Card className="expense-item">
			<div className="expense-item__price">${props.amount}</div>
			<div className="expense-item__content">
				<h2 className="expense-item__title">{props.title}</h2>
			</div>
			<ExpenseDate date={props.date} />
		</Card>
	);
};

export default ExpenseItem;
