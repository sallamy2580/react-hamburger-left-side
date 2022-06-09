import React from "react";
import { Pie } from "react-chartjs-2";

export default function PieChart(props) {
  let labels = [];
  let vData = [];
  if (props.vData && props.vData.length > 0) {
    labels = props.vData.map((shape) => shape.sentiment);
    vData = props.vData.map((shape) => shape.percentage.toFixed(2) * 100);
  }

  const data = {
    labels: labels,
    datasets: [
      {
        label: "percentage",
        data: vData,
        backgroundColor: [
          "#06A4F455",
          "#3BF4fB77",
          "#73FBD399",

          "#FFD23F55",
          "#FF9E0055",

          "#FF009566",

          "#D62DFF77"
        ],
        borderColor: [
          "#06A4F4",
          "#3BF4fB",
          "#73FBD3",
          "#FFD23F",
          "#FF9E00",
          "#FF0095",
          "#D62DFF"
        ],
        borderWidth: 1
      }
    ]
  };

  const options = {
    legend: {
      position: "bottom",
      labels: {
        boxWidth: 20,
        fontSize: 12,
        fontColor: "black"
      }
    }
  };
  return (
    <div>
      <Pie data={data} options={options} />
    </div>
  );
}
