import Button from "../UI/Button";
import "./Expense.css";

const ExpenseForm = () => {
	const titleChangeHandler = () => {
		console.log("title changed");
	};
	return (
		<form className="expense__form">
			<div className="expense__form-inputs">
				<div>
					<input
						type="text"
						name="title"
						placeholder="Title"
						className="form-input"
						onChange={titleChangeHandler}
					/>
				</div>
				<div>
					<input
						name="amount"
						placeholder="Amount"
						min="0.01"
						step="0.01"
						className="form-input"
						onChange={titleChangeHandler}
					/>
				</div>
				<div>
					<input
						type="date"
						name="date"
						placeholder="Date"
						min="2019-01-01"
						max="2022-13-31"
						className="form-input"
						onChange={titleChangeHandler}
					/>
				</div>
				<div>
					<Button
						type="submit"
						variant="primary"
						className="w-full whitespace-nowrap"
					>
						Add expense
					</Button>
				</div>
			</div>
		</form>
	);
};
export default ExpenseForm;
