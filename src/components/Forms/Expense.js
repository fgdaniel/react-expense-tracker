import { useState } from "react";
import Button from "../UI/Button";
import "./Expense.css";

const ExpenseForm = () => {
	// Method 1
	const [getTitle, setTitle] = useState("");
	const [getAmount, setAmount] = useState("");
	const [getDate, setDate] = useState("");

	// Method 2 and 3
	// const [getInput, setInput] = useState({
	// 	title: "",
	// 	amount: "",
	// 	date: "",
	// });

	// Field handler
	const titleChangeHandler = (event) => {
		// Method 1
		// Update states independently
		setTitle(event.target.value);

		// Method 2
		// Get previous state and update with new state
		// setInput({ ...getInput, title: event.target.value });

		// Method 3
		// Get previous state and replace only new key state
		// setInput((prevState) => {
		// 	return { ...prevState, title: event.target.value };
		// });
	};

	// Field handler
	const amountChangeHandler = (event) => {
		// Method 1
		// Update states independently
		setAmount(event.target.value);

		// Method 2
		// Get previous state and update with new state
		// setInput({ ...getInput, title: event.target.value });

		// Method 3
		// Get previous state and replace only new key state
		// setInput((prevState) => {
		// 	return { ...prevState, amount: event.target.value };
		// });
	};

	// Field handler
	const dateChangeHandler = (event) => {
		// Method 1
		// Update states independently
		setDate(event.target.value);

		// Method 2
		// Get previous state and update with new state
		// setInput({ ...getInput, title: event.target.value });

		// Method 3
		// Get previous state and replace only new key state
		// setInput((prevState) => {
		// 	return { ...prevState, date: event.target.value };
		// });
	};

	// Handler for submitting form
	const submitHandler = (event) => {
		event.preventDefault();

		const expenseData = {
			title: getTitle,
			amount: getAmount,
			date: new Date(getDate),
		};

		console.log(expenseData);

		// Clear fields
		setTitle("");
		setAmount("");
		setDate("");
	};

	return (
		<form className="expense__form" onSubmit={submitHandler}>
			<div className="expense__form-inputs">
				<div>
					<input
						type="text"
						name="title"
						placeholder="Title"
						className="form-input"
						value={getTitle}
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
						value={getAmount}
						onChange={amountChangeHandler}
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
						value={getDate}
						onChange={dateChangeHandler}
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
