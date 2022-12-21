import Card from "../UI/Card";
import ExpenseItem from "./Item";
import "./List.css";

const ExpenseList = (props) => {
	let expensesContent = (
		<Card className="p-4 text-white">No expenses found</Card>
	);

	if (props.items.length > 0) {
		expensesContent = props.items.map((item, index) => (
			<ExpenseItem
				key={index}
				title={item.title}
				amount={item.amount}
				date={item.date}
			/>
		));
	}

	return <div className="expense-list">{expensesContent}</div>;
};

export default ExpenseList;
