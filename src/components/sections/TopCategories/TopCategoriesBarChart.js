import React from "react";
import { Bar } from "react-chartjs-2";

export default function Chart(props) {
  let labels = [];
  let TopCatAverage = [];
  if (props.cData && props.cData.length > 0) {
    labels = props.cData.map((shape) => shape.category);
    TopCatAverage = props.cData.map((shape) => shape.average_sentiment);
  }

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Average Sentiment of Embed",
        data: TopCatAverage,
        backgroundColor: [
          "#FF009555",
          "#FFB5F999",
          "#701BEE33",
          "#DAB5FF99",
          "#06A4F455",
          "#3BF4fB77",
          "#07BEB855",
          "#73FBD399",
          "#FF9E0055",
          "#FFD23F55"
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
        fontColor: "black"
      }
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: "black"
          }
        }
      ],
      xAxes: [
        {
          ticks: {
            fontColor: "black"
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
