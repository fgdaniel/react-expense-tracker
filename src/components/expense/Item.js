import "../../css/ExpenseItem.scss";

function ExpenseItem(props) {
	return (
		<div className="expense-item">
			<div className="expense-item__date">{props.date}</div>
			<div className="expense-item__content">
				<h2 className="expense-item__title">{props.title}</h2>
				<div className="expense-item__price">${props.amount}</div>
			</div>
		</div>
	);
}

export default ExpenseItem;
