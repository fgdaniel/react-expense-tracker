import ExpenseItem from "./components/expense/Item";

function App() {
	const expenses = [
		{
			title: "Car Insurance",
			amount: 150,
			date: new Date(2021, 2, 28).toLocaleDateString(),
		},
		{
			title: "Health Insurance",
			amount: 350,
			date: new Date(2021, 5, 15).toLocaleDateString(),
		},
		{
			title: "Taxes",
			amount: 550,
			date: new Date(2021, 8, 12).toLocaleDateString(),
		},
	];
	return (
		<div>
			<ExpenseItem
				title={expenses[0].title}
				amount={expenses[0].amount}
				date={expenses[0].date}
			/>
			<ExpenseItem
				title={expenses[1].title}
				amount={expenses[1].amount}
				date={expenses[1].date}
			/>
			<ExpenseItem
				title={expenses[2].title}
				amount={expenses[2].amount}
				date={expenses[2].date}
			/>
		</div>
	);
}

export default App;
