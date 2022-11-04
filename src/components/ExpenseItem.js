import "../css/ExpenseItem.scss";

function ExpenseItem(props) {
	const month = props.date.toLocaleString("en-US", { month: "long" });
	const day = props.date.toLocaleString("en-US", { day: "numeric" });
	const year = props.date.toLocaleString("en-US", { year: "numeric" });
	return (
		<div className="expense-item">
			<div className="expense-item__date">
				<div>{month}</div>
				<div>{day}</div>
				<div>{year}</div>
			</div>
			<div className="expense-item__content">
				<h2 className="expense-item__title">{props.title}</h2>
				<div className="expense-item__price">${props.amount}</div>
			</div>
		</div>
	);
}

export default ExpenseItem;
