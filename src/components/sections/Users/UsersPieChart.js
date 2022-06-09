import React from "react";
import { Pie } from "react-chartjs-2";

export default function PieChart(props) {
  let labels = [];
  let userPercentage = [];
  if (props.userData && props.userData.length > 0) {
    labels = props.userData.map((shape) => shape.username);
    userPercentage = props.userData.map(
      (shape) => shape.percentage.toFixed(2) * 100
    );
  }

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Percentage of Platforms",
        data: userPercentage,
        backgroundColor: [
          "#FF0095",
          "#CD17C9",
          "#701BEE",
          "#AD5CFF",
          "#06A4F4",
          "#3BF4fB",
          "#07BEB8",
          "#73FBD3",
          "#FF9E00",
          "#FFD23F"
        ],
        borderColor: [
          "#FF0095",
          "#CD17C9",
          "#701BEE",
          "#AD5CFF",
          "#06A4F4",
          "#3BF4fB",
          "#07BEB8",
          "#73FBD3",
          "#FF9E00",
          "#FFD23F"
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
        fontColor: "white"
      }
    }
  };
  return (
    <div>
      <Pie data={data} options={options} />
    </div>
  );
}
