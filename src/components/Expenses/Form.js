import { useState } from "react";
import Button from "../UI/Button";
import "./Form.css";

const ExpenseForm = (props) => {
	// Method 1
	const [getFormTitle, setFormTitle] = useState("");
	const [getFormAmount, setFormAmount] = useState("");
	const [getFormDate, setFormDate] = useState("");
	const [getForm, setForm] = useState(false);

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
		setFormTitle(event.target.value);

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
		setFormAmount(event.target.value);

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
		setFormDate(event.target.value);

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
			title: getFormTitle,
			amount: getFormAmount,
			date: new Date(getFormDate),
		};

		console.log(expenseData);
		props.onSaveData(expenseData); // Calling prop as function

		// Clear fields
		setFormTitle("");
		setFormAmount("");
		setFormDate("");
	};

	const formToggleHandler = () => {
		setForm(!getForm);
		console.log(getForm);
	};

	if (getForm == false) {
		return (
			<button className="btn btn-primary" onClick={formToggleHandler}>
				Add expense
			</button>
		);
	}
	return (
		<form className="expense__form" onSubmit={submitHandler}>
			<div className="expense__form-buttons">
				<div>
					<button
						className="btn btn-danger"
						onClick={formToggleHandler}
					>
						Cancel
					</button>
				</div>
				<div>
					<Button type="submit" variant="success">
						Add expense
					</Button>
				</div>
			</div>
			<div className="expense__form-inputs">
				<div>
					<input
						type="text"
						name="title"
						placeholder="Title"
						className="form-input"
						value={getFormTitle}
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
						value={getFormAmount}
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
						value={getFormDate}
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
		</form>
	);
};
export default ExpenseForm;
