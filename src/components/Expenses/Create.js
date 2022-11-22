import ExpenseForm from "../Forms/Expense";

const ExpenseCreate = (props) => {
	const saveDataHandler = (existingData) => {
		const data = {
			...existingData,
			id: Math.random().toString(),
		};
		props.onAdd(data);
	};
	return (
		<div>
			<ExpenseForm onSaveData={saveDataHandler} />
		</div>
	);
};

export default ExpenseCreate;
