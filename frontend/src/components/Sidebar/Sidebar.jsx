import React, { Component } from "react";

import HeaderLinks from "../Header/HeaderLinks.jsx";
import dashboardRoutes from "routes/dashboard.jsx";
import imagine from "assets/img/sidebar-3.jpg";
import logo from "assets/img/logo.png";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    };
  }
  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }
  render() {
    const sidebarBackground = {
      backgroundImage: "url(" + imagine + ")"
    };
    console.log(this.props);
    return (
      <div
        id="sidebar"
        className="sidebar"
        data-color="black"
        data-image={imagine}
      >
        <div className="sidebar-background" style={sidebarBackground} />
        <div className="logo">
          <a href="/" className="simple-text logo-mini">
            <div className="logo-img">
              <img src={logo} alt="logo_image" style={{ height: '34px', width: 'auto', }} />
            </div>
          </a>
          <a href="/" className="simple-text logo-normal">
            After Party
          </a>
        </div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            {this.state.width <= 991 ? <HeaderLinks /> : null}
            {dashboardRoutes.map((prop, key) => {
              return (
                <li key={key}>
                  <a className="nav-link" href={prop.path}>
                    <i className={prop.icon} />
                    <p>{prop.name}</p>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
