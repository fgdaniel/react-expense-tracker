import { useState } from "react";
import ExpenseCreate from "./components/Expenses/Create";
import Expenses from "./components/Expenses/Expenses";

const dummy_expenses = [
	{
		title: "Car Insurance",
		amount: 150,
		date: new Date(2021, 2, 28),
	},
	{
		title: "Health Insurance",
		amount: 350,
		date: new Date(2020, 5, 15),
	},
	{
		title: "Taxes",
		amount: 550,
		date: new Date(2019, 8, 12),
	},
];

const App = () => {
	const [getExpenses, setExpenses] = useState(dummy_expenses);

	const addExpenseHandler = (expense) => {
		setExpenses((prev) => {
			return [expense, ...prev];
		});
		// console.log(expense);
	};
	return (
		<div className="container space-y-6">
			<ExpenseCreate onAdd={addExpenseHandler} />
			<Expenses items={getExpenses} />
		</div>
	);
};

export default App;
