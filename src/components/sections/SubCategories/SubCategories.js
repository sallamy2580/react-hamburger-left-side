import React from "react";
import BarChart from "./SubCategoriesBarChart";
import PieChart from "./SubCategoriesPieChart";

class SubCategories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch("https://socialcanvas-admin.kargo.com/v2/embed-stats/subcategories")
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
      let subCategories =
        this.state.items && this.state.items.length > 0
          ? this.state.items.slice(0, 10)
          : [];

      return (
        <div className="section-container">
          <h1> Sub Categories</h1>
          <div className="content-container">
            <div>
              <h4> Percentage of Subcategories</h4>
              <PieChart cData={subCategories} />
            </div>
            <div>
              <h4> Average Sentiment of Embeds</h4>
              <BarChart cData={subCategories} />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default SubCategories;
