import React from "react";
import "./Chart.styles.scss";
import ChartBar from "./ChartBar.component";

function Chart(props) {
  const { dataPoints } = props;
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  console.log(dataPointValues);
  const totalMax = Math.max(...dataPointValues);
  console.log(totalMax);
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
