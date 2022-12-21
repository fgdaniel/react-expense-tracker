import { useState } from "react";
import Card from "../components/UI/Card";
import ExpenseFilter from "../components/Expenses/Filter";

import "./Expenses.css";
import ExpenseList from "../components/Expenses/List";
const ExpensesArchive = (props) => {
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

	return (
		<div className="space-y-4">
			<Card className="p-4 text-white">
				<ExpenseFilter
					selected={getFilterYear}
					onChangeData={expenseFilterHandler}
				/>
			</Card>
			<ExpenseList items={filteredExpenses} />
		</div>
	);
};
export default ExpensesArchive;
