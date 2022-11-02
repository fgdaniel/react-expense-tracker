import "../../css/ExpenseItem.scss";

function ExpenseItem() {
	const date = new Date(2021, 2, 28);
	const title = "Car insurance";
	const amount = 294.67;
	return (
		<div className="expense-item">
			<div className="expense-item__date">
				{date.toLocaleDateString()}
			</div>
			<div className="expense-item__content">
				<h2 className="expense-item__title">{title}</h2>
				<div className="expense-item__price">${amount}</div>
			</div>
		</div>
	);
}

export default ExpenseItem;
