import "./Expense.css";

const ExpenseForm = () => {
	return (
		<form className="expense__form">
			<div>
				<input type="text" className="form-input" placeholder="Title" />
			</div>
			<div>
				<input
					type="number"
					className="form-input"
					placeholder="Amount"
					min="0.01"
					step="0.01"
				/>
			</div>
			<div>
				<input
					type="date"
					min="2019-01-01"
					max="2022-13-31"
					className="form-input"
					placeholder="Title"
				/>
			</div>
			<button type="submit">Add expense</button>
		</form>
	);
};
export default ExpenseForm;
