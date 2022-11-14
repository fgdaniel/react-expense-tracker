import Button from "../UI/Button";
import "./Expense.css";
import { TextInput, NumberInput, DateInput } from "../UI/Fields";

const ExpenseForm = () => {
	return (
		<form className="expense__form">
			<div className="expense__form-inputs">
				<div>
					<TextInput name="title" placeholder="Title" />
				</div>
				<div>
					<NumberInput
						name="amount"
						placeholder="Amount"
						min="0.01"
						step="0.01"
					/>
				</div>
				<div>
					<DateInput
						name="date"
						placeholder="Title"
						min="2019-01-01"
						max="2022-13-31"
					/>
				</div>
			</div>
			<Button type="submit" variant="primary">
				Add expense
			</Button>
		</form>
	);
};
export default ExpenseForm;
