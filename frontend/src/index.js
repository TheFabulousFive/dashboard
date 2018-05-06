import React from "react";
import ReactDOM from "react-dom";

import Dashboard from './layouts/Dashboard/Dashboard.jsx';

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard.css?v=1.2.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";

console.log('Django props:', window.props);

ReactDOM.render(
  <Dashboard {...window.props} />,
  document.getElementById("root")
);
