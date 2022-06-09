import React from "react";
import BarChart from "./EmbeddedPlatformsBarChart";
import PieChart from "./EmbeddedPlatformsPieChart";

class EmbeddedPlatforms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch("https://socialcanvas-admin.kargo.com/v2/embed-stats/platforms")
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
    const { isLoaded } = this.state;

    if (!isLoaded) {
      return <div>Loading ...</div>;
    } else {
      const embeddedPlatform =
        this.state.items && this.state.items.length > 0
          ? this.state.items.slice(0, 10)
          : [];
      return (
        <div className="section-container">
          <h1>Embedded Platforms</h1>
          <div className="content-container">
            <div>
              <h4> Percentage of Embedded Platforms</h4>
              <PieChart platformData={embeddedPlatform} />
            </div>
            <div>
              <h4> Average Sentiments of Embedded Platforms</h4>
              <BarChart platformData={embeddedPlatform} />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default EmbeddedPlatforms;
