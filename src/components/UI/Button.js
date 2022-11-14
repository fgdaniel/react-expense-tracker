import "./Button.css";
const Button = (props) => {
	const classes = ["btn"];
	if (props.variant !== undefined) {
		classes.push(["btn-" + props.variant]);
	}
	if (props.className !== undefined) {
		classes.push(props.className.split(" "));
	}
	if (props.type === "link")
		return (
			<a href={props.href} className={classes.join(" ")}>
				{props.children}
			</a>
		);
	return (
		<button type={props.type} className={classes.join(" ")}>
			{props.children}
		</button>
	);
};

export default Button;
