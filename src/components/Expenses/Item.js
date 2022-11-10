import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import Card from "../UI/Card";
import ExpenseDate from "../Expenses/Date";
import "./Item.css";
import Tooltip from "../UI/Tooltip";

const ExpenseItem = (props) => {
	const [title, setTitle] = useState(props.title);

	// Change title handler
	const changeTitle = () => {
		setTitle("Updated!");
		setTimeout(() => {
			setTitle(title);
		}, 1000); // Revert to original after 1 second
	};

	return (
		<Card className="expense-item">
			<div className="expense-item__price">${props.amount}</div>
			<div className="expense-item__content">
				<h2 className="expense-item__title">{title}</h2>
			</div>
			<ExpenseDate date={props.date} />
			<div className="expense-item__actions">
				<button className="text-green-400" onClick={changeTitle}>
					<Tooltip text="Edit title" align="top">
						<FontAwesomeIcon icon={solid("pen-to-square")} />
					</Tooltip>
				</button>
			</div>
		</Card>
	);
};

export default ExpenseItem;
