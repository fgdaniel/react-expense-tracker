import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Tooltip from "./Tooltip";

const ExpenseItem = (props) => {
	return (
		<Card className="expense-item">
			<div className="expense-item__price">${props.amount}</div>
			<div className="expense-item__content">
				<h2 className="expense-item__title">{props.title}</h2>
			</div>
			<ExpenseDate date={props.date} />
			<div className="expense-item__actions">
				<button className="text-green-400">
					<Tooltip text="Edit title" align="top">
						<FontAwesomeIcon icon={solid("pen-to-square")} />
					</Tooltip>
				</button>
			</div>
		</Card>
	);
};

export default ExpenseItem;
