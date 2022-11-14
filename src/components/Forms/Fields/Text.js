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

export default TextInput;
