import Bar from "./Bar";
import "./Chart.css";

const Chart = (props) => {
	const pointsValues = props.dataPoints.map((point) => point.value);
	const maxValue = Math.max(...pointsValues);
	return (
		<div className="chart">
			{props.dataPoints.map((point, index) => (
				<Bar
					key={index}
					value={point.value}
					maxValue={maxValue}
					label={point.label}
				/>
			))}
		</div>
	);
};
export default Chart;
