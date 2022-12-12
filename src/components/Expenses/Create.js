import ExpenseForm from "./Form";

const ExpenseCreate = (props) => {
	const saveDataHandler = (existingData) => {
		// console.log(existingData);
		props.onAdd(existingData); // Calling prop as function
	};
	return (
		<div>
			<ExpenseForm onSaveData={saveDataHandler} />
		</div>
	);
};

export default ExpenseCreate;
