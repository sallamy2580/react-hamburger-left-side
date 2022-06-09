import React from "react";
import { Bar } from "react-chartjs-2";

export default function Chart(props) {
  let labels = [];
  let SubCatAverage = [];
  if (props.cData && props.cData.length > 0) {
    labels = props.cData.map((shape) => shape.category);
    SubCatAverage = props.cData.map((shape) => shape.average_sentiment);
  }
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Average Sentiment of Embeds",
        data: SubCatAverage,
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
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            color: "#737373",
            zeroLineColor: "#737373"
          },
          ticks: {
            beginAtZero: true,
            fontColor: "white"
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            color: "#737373"
          },
          ticks: {
            fontColor: "white"
          }
        }
      ]
    }
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
}
