import { useState } from "react";
import "./Filter.css";

const ExpenseFilter = (props) => {
	const [getValue, setValue] = useState(props.selected ?? "");

	const changeHandler = (event) => {
		setValue(event.target.value);
		props.onChangeData(event.target.value);
		console.log(
			`ExpenseFilter: setValue(${event.target.value}) succesfully`
		);
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
				<option value="all">All</option>
				{props.range.map((item, index) => {
					return (
						<option value={item} key={index}>
							{item}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default ExpenseFilter;
