import { useState } from "react";
import "./Filter.css";

const ExpenseFilter = (props) => {
	const [getValue, setValue] = useState(props.selected ?? "");

	const changeHandler = (event) => {
		setValue(event.target.value);
		props.onChangeData(event.target.value);
		console.log(`setValue ${event.target.value} succesfully`);
	};
	return (
		<div className="expense-filter">
			<label className="expense-filter__label" htmlFor="filter-year">
				Filter by year
			</label>
			<select
				className="form-select"
				name="filter-year"
				id="filter-year"
				value={getValue}
				onChange={changeHandler}
			>
				<option value="2022">2022</option>
				<option value="2021">2021</option>
				<option value="2020">2020</option>
				<option value="2019">2019</option>
			</select>
		</div>
	);
};

export default ExpenseFilter;
