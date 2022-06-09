import React from "react";
import { Pie } from "react-chartjs-2";

export default function Chart(props) {
  let labels = [];
  let SubCatPercentage = [];
  if (props.cData && props.cData.length > 0) {
    labels = props.cData.map((shape) => shape.category);
    SubCatPercentage = props.cData.map(
      (shape) => shape.percentage.toFixed(5) * 100
    );
  }

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Subcategory Percentage",
        data: SubCatPercentage,
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

//export PieChart
