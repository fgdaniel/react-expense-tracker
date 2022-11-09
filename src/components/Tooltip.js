import "./Tooltip.css";
const Tooltip = (props) => {
	let classes = ["tooltip"];
	if (props.className !== undefined) classes.push(props.className.split(" "));
	if (props.align !== undefined)
		classes.push(["tooltip__align-" + props.align]);

	return (
		<div className={classes.join(" ")}>
			<div className="tooltip__content">{props.children}</div>
			<div className="tooltip__text">{props.text}</div>
		</div>
	);
};

export default Tooltip;
