import { Nav, NavItem } from "react-bootstrap";
import React, { Component } from "react";

class HeaderLinks extends Component {
  render() {
    return (
      <div>
        <Nav style={{ float: 'right' }}>
          <NavItem eventKey={1} href="/">
            Log out
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default HeaderLinks;
