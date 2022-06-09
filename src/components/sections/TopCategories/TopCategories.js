import React from "react";
import BarChart from "./TopCategoriesBarChart";
import PieChart from "./TopCategoriesPieChart";

class TopCategories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch("https://socialcanvas-admin.kargo.com/v2/embed-stats/categories")
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
      return <div>Loading...</div>;
    } else {
      let topCategories =
        this.state.items && this.state.items.length > 0
          ? this.state.items.slice(0, 10)
          : [];

      return (
        <div className="section-container">
          <h1> Top Top-Level Categories</h1>

          <div className="content-container">
            <div>
              <h4> Percentage of Top-Level Categories</h4>
              <PieChart cData={topCategories} />
            </div>

            <div>
              <h4> Average Sentiment of Embeds</h4>
              <BarChart cData={topCategories} />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default TopCategories;
