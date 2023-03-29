import { useState } from "react";
import ExpenseCreate from "./components/Expenses/Create";
import ExpensesArchive from "./archive/Expenses";

const dummy_expenses = [
	{
		title: "Shop",
		amount: 50,
		date: new Date(2022, 0, 4),
	},
	{
		title: "Shop",
		amount: 31,
		date: new Date(2022, 0, 4),
	},
	{
		title: "Shop",
		amount: 160,
		date: new Date(2022, 0, 4),
	},
	{
		title: "Debt",
		amount: 100,
		date: new Date(2022, 0, 4),
	},
	{
		title: "Shop",
		amount: 540,
		date: new Date(2022, 1, 4),
	},
	{
		title: "Food & drinks",
		amount: 21,
		date: new Date(2022, 1, 4),
	},
	{
		title: "Food & drinks",
		amount: 35,
		date: new Date(2023, 2, 4),
	},
	{
		title: "Debt",
		amount: 100,
		date: new Date(2023, 2, 5),
	},
	{
		title: "Shop",
		amount: 80,
		date: new Date(2023, 2, 5),
	},
	{
		title: "Shop",
		amount: 50,
		date: new Date(2023, 3, 5),
	},
	{
		title: "Shop",
		amount: 50,
		date: new Date(2023, 3, 5),
	},
	{
		title: "Food & drinks",
		amount: 13,
		date: new Date(2023, 3, 5),
	},
	{
		title: "Food & drinks",
		amount: 48,
		date: new Date(2023, 4, 5),
	},
	{
		title: "Food & drinks",
		amount: 13,
		date: new Date(2023, 4, 6),
	},
	{
		title: "Food & drinks",
		amount: 7,
		date: new Date(2023, 5, 6),
	},
	{
		title: "Shop",
		amount: 200,
		date: new Date(2023, 5, 6),
	},
	{
		title: "Travel",
		amount: 54,
		date: new Date(2023, 5, 6),
	},
	{
		title: "Entertainment",
		amount: 50,
		date: new Date(2023, 5, 6),
	},
	{
		title: "Food & drinks",
		amount: 22,
		date: new Date(2023, 5, 7),
	},
	{
		title: "Food & drinks",
		amount: 21,
		date: new Date(2023, 6, 7),
	},
	{
		title: "Shop",
		amount: 171,
		date: new Date(2023, 6, 8),
	},
	{
		title: "Food & drinks",
		amount: 30,
		date: new Date(2023, 6, 8),
	},
	{
		title: "Food & drinks",
		amount: 13,
		date: new Date(2023, 7, 8),
	},
	{
		title: "Food & drinks",
		amount: 24,
		date: new Date(2023, 7, 8),
	},
	{
		title: "Food & drinks",
		amount: 13,
		date: new Date(2023, 7, 8),
	},
	{
		title: "Food & drinks",
		amount: 23,
		date: new Date(2023, 7, 9),
	},
	{
		title: "Food & drinks",
		amount: 21,
		date: new Date(2023, 7, 10),
	},
	{
		title: "Shop",
		amount: 200,
		date: new Date(2023, 7, 10),
	},
	{
		title: "Food & drinks",
		amount: 35,
		date: new Date(2023, 7, 11),
	},
	{
		title: "Food & drinks",
		amount: 21,
		date: new Date(2023, 8, 12),
	},
	{
		title: "Food & drinks",
		amount: 13,
		date: new Date(2023, 8, 13),
	},
	{
		title: "Shop",
		amount: 200,
		date: new Date(2023, 8, 13),
	},
	{
		title: "Food & drinks",
		amount: 13,
		date: new Date(2023, 8, 14),
	},
	{
		title: "Food & drinks",
		amount: 8,
		date: new Date(2023, 9, 14),
	},
	{
		title: "Shop",
		amount: 200,
		date: new Date(2023, 9, 15),
	},
	{
		title: "Food & drinks",
		amount: 7,
		date: new Date(2023, 9, 16),
	},
];

const App = () => {
	const [getExpenses, setExpenses] = useState(dummy_expenses);

	const addExpenseHandler = (expense) => {
		setExpenses((prev) => {
			return [expense, ...prev];
		});
	};
	return (
		<div className="container space-y-6">
			<ExpenseCreate onAdd={addExpenseHandler} />
			<ExpensesArchive items={getExpenses} />
		</div>
	);
};

export default App;
