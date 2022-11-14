const TextInput = (props) => {
	let classes = "form-input";
	if (props.className !== undefined) {
		classes += " " + props.className;
	}
	return (
		<>
			{props.label !== undefined && (
				<label htmlFor={props.name}>{props.label}</label>
			)}
			<input
				type="text"
				name={props.name}
				id={props.name}
				placeholder={props.placeholder}
				className={classes}
			/>
		</>
	);
};

const NumberInput = (props) => {
	let classes = "form-input";
	if (props.className !== undefined) {
		classes += " " + props.className;
	}
	return (
		<>
			{props.label !== undefined && (
				<label htmlFor={props.name}>{props.label}</label>
			)}
			<input
				type="number"
				name={props.name}
				id={props.name}
				placeholder={props.placeholder}
				className={classes}
				min={props.min}
				step={props.step}
			/>
		</>
	);
};

const DateInput = (props) => {
	let classes = "form-input";
	if (props.className !== undefined) {
		classes += " " + props.className;
	}
	return (
		<>
			{props.label !== undefined && (
				<label htmlFor={props.name}>{props.label}</label>
			)}
			<input
				type="date"
				name={props.name}
				id={props.name}
				placeholder={props.placeholder}
				className={classes}
				min={props.min}
				max={props.max}
			/>
		</>
	);
};

export { TextInput, DateInput, NumberInput };
