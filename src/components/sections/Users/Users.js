import React from "react";
import BarChart from "./UsersBarChart";
import PieChart from "./UsersPieChart";

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch("https://socialcanvas-admin.kargo.com/v2/embed-stats/users")
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
      return <div> Loading... </div>;
    } else {
      const topUser =
        this.state.items && this.state.items.length > 0
          ? this.state.items.slice(0, 10)
          : [];
      return (
        <div className="section-container">
          <h1> Top Users</h1>

          <div className="content-container">
            <div>
              <h4> Percentage of Top Users</h4>
              <PieChart userData={topUser} />
            </div>

            <div>
              <h4> Average Sentiment of Top Users</h4>
              <BarChart userData={topUser} />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Users;
