import Card from "../UI/Card";
import ExpenseItem from "./Item";
import "./List.css";

const ExpenseList = (props) => {
	if (props.items.length === 0) {
		return <Card className="p-4 text-white">No expenses found</Card>;
	}
	return (
		<div className="expense-list">
			{props.items.map((item, index) => (
				<ExpenseItem
					key={index}
					title={item.title}
					amount={item.amount}
					date={item.date}
				/>
			))}
		</div>
	);
};

export default ExpenseList;
