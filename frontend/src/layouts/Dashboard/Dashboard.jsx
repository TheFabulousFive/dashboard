import React, { Component } from "react";

import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import Sidebar from "components/Sidebar/Sidebar";

import { DASHBOARD_COMPONENTS } from "routes/dashboard.jsx";

class Dashboard extends Component {
  componentDidUpdate(e) {
    if (
      window.innerWidth < 993 &&
      e.history.location.pathname !== e.location.pathname &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
    }
    if (e.history.action === "PUSH") {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.mainPanel.scrollTop = 0;
    }
  }
  render() {
    return (
      <div className="wrapper">
        <Sidebar {...this.props} />
        <div id="main-panel" className="main-panel" ref="mainPanel">
          <Header {...this.props} />
          {React.createElement(DASHBOARD_COMPONENTS[this.props.viewData.component], this.props)}
          <Footer />
        </div>
      </div>
    );
  }
}

export default Dashboard;
