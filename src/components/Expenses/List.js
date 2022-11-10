import ExpenseItem from "./Item";
import "./List.css";
const ExpenseList = (props) => {
	return (
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
	);
};
export default ExpenseList;
