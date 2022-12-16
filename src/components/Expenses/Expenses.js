import { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./Filter";
import ExpenseItem from "./Item";
import "./Expenses.css";
const Expenses = (props) => {
	const [getFilterYear, setFilterYear] = useState("all");
	const [getList, setList] = useState(props.items);

	const expenseFilterHandler = (selected) => {
		setFilterYear(selected);
		console.log(`Item ${selected} stored succesfully`);
	};

	const filteredExpenses = getList.filter((item) => {
		if (getFilterYear === "all") return item;
		return item.date.getFullYear().toString() === getFilterYear;
	});

	let expensesContent = (
		<Card className="p-4 text-white">No expenses found</Card>
	);

	if (filteredExpenses.length > 0) {
		expensesContent = filteredExpenses.map((item, index) => (
			<ExpenseItem
				key={index}
				title={item.title}
				amount={item.amount}
				date={item.date}
			/>
		));
	}

	// console.log(props.items);
	return (
		<div className="space-y-4">
			<Card className="p-4 text-white">
				<ExpenseFilter
					selected={getFilterYear}
					onChangeData={expenseFilterHandler}
				/>
			</Card>
			<div className="expense-list">{expensesContent}</div>
		</div>
	);
};
export default Expenses;
