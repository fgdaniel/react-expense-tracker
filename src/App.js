import ExpenseCreate from "./components/Expenses/Create";
import ExpenseList from "./components/Expenses/List";

const App = () => {
	const expenses = [
		{
			title: "Car Insurance",
			amount: 150,
			date: new Date(2021, 2, 28),
		},
		{
			title: "Health Insurance",
			amount: 350,
			date: new Date(2021, 5, 15),
		},
		{
			title: "Taxes",
			amount: 550,
			date: new Date(2021, 8, 12),
		},
	];
	const addExpenseHandler = (expense) => {
		console.log(expense);
	};
	return (
		<div className="container space-y-6">
			<ExpenseCreate onAdd={addExpenseHandler} />
			<ExpenseList items={expenses} />
		</div>
	);
};

export default App;
