import React from "react";
import ReactDOM from "react-dom";

import { HashRouter, Route, Switch } from "react-router-dom";

import indexRoutes from "routes/index.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard.css?v=1.2.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";

console.log('props:', window.props);

ReactDOM.render(
  <HashRouter>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route to={prop.path} render={(props) => React.createElement(prop.component, { ...props, ...window.props })} key={key} />;
      })}
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
