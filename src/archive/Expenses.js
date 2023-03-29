import { useState } from "react";
import Card from "../components/UI/Card";
import ExpenseFilter from "../components/Expenses/Filter";

import "./Expenses.css";
import ExpenseList from "../components/Expenses/List";
import ExpenseChart from "../components/Expenses/Chart";
import range from "../functions/range";
const ExpensesArchive = (props) => {
	const [getFilterYear, setFilterYear] = useState("all");
	const [getList, setList] = useState(props.items);

	const expenseFilterHandler = (selected) => {
		setFilterYear(selected);
		console.log(`ExpensesArchive: setFilterYear(${selected}) succesfully`);
	};

	const filteredExpenses = getList.filter((item) => {
		if (getFilterYear === "all") return item;
		return item.date.getFullYear().toString() === getFilterYear;
	});

	return (
		<div className="space-y-4">
			<Card className="p-4 space-y-4 text-white">
				<ExpenseFilter
					selected={getFilterYear}
					range={range(2010, parseInt(new Date().getFullYear()), 1)}
					onChangeData={expenseFilterHandler}
				/>
				<ExpenseChart expenses={filteredExpenses} />
			</Card>
			<ExpenseList items={filteredExpenses} />
		</div>
	);
};
export default ExpensesArchive;
