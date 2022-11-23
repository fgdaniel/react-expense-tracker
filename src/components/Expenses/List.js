import { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./Filter";
import ExpenseItem from "./Item";
import "./List.css";
const ExpenseList = (props) => {
	const [getFilterYear, setFilterYear] = useState("2020");
	const expenseFilterHandler = (selected) => {
		// console.log(selected);
		setFilterYear(selected);
		console.log(`Item ${selected} stored succesfully`);
	};
	return (
		<div className="space-y-4">
			<Card className="p-4 text-white">
				<ExpenseFilter
					selected={getFilterYear}
					onChangeData={expenseFilterHandler}
				/>
			</Card>
			<div className="expense-list">
				<ExpenseItem
					title={props.items[0].title}
					amount={props.items[0].amount}
					date={props.items[0].date}
				/>
				<ExpenseItem
					title={props.items[1].title}
					amount={props.items[1].amount}
					date={props.items[1].date}
				/>
				<ExpenseItem
					title={props.items[2].title}
					amount={props.items[2].amount}
					date={props.items[2].date}
				/>
			</div>
		</div>
	);
};
export default ExpenseList;
