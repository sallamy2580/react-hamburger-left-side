import React from "react";
import "./SidebarStyling.css";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-scroll";

class Sidebar extends React.Component {
  state = {
    menuOpen: false
  };

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  render() {
    return (
      <Menu
        isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}
      >
        {/* <a className="menu-item" href="/" smooth={true} duration={500}>
          Top-Level Categories
        </a> */}
        <Link className="menu-item" to="About" smooth={true} duration={500}>
          About Social Canvas
        </Link>
        <Link
          className="menu-item"
          to="TopCategories"
          smooth={true}
          duration={500}
        >
          Top-level Categories
        </Link>
        <Link
          className="menu-item"
          to="SubCategories"
          smooth={true}
          duration={500}
        >
          Subcategories
        </Link>
        <Link
          className="menu-item"
          to="EmbededPlatforms"
          smooth={true}
          duration={500}
        >
          Embedded Platforms
        </Link>
        <Link className="menu-item" to="Users" smooth={true} duration={500}>
          Top Users
        </Link>
        <Link
          className="menu-item"
          to="Sentiments"
          smooth={true}
          duration={500}
        >
          Sentiments
        </Link>
      </Menu>
    );
  }
}
export default Sidebar;
