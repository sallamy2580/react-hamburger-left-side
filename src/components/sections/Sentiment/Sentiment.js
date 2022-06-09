import React from "react";
import PieChart from "./SentimentPieChart.js";

class Sentiment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      item: []
    };
  }

  componentDidMount() {
    fetch("https://socialcanvas-admin.kargo.com/v2/embed-stats/sentiment")
      .then((res) => res.json())
      .then(
        (json) => {
          this.setState({
            isLoaded: true,
            items: json
          });
        },
        (error) => {
          if (error) {
            console.log("Error: " + error);
          }
        }
      );
  }

  render() {
    var { isLoaded } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      const TopSentiment =
        this.state.items && this.state.items.length > 0
          ? this.state.items.slice(0, 7)
          : [];

      return (
        <div className="section-container">
          <h1>Sentiment</h1>

          <div className="content-container">
            <div>
              <h4>Percentage</h4>
              <PieChart vData={TopSentiment} />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Sentiment;
