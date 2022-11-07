import ExpenseList from "./components/ExpenseList";

function App() {
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
	return (
		<div className="container mx-auto">
			<ExpenseList items={expenses} />
		</div>
	);
}

export default App;
