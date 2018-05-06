import { Col, Row } from "react-bootstrap";
import React, { Component } from "react";

export class StatsCard extends Component {
  render() {
    return (
      <div className="card card-stats">
        <div className="content">
          <Row>
            <Col xs={12}>
              <div className="numbers">
                {this.props.statsValue}
                <p>{this.props.statsText}</p>
              </div>
            </Col>
          </Row>
          <div className="footer">
            <hr />
            <div className="stats">
              {this.props.statsIcon} {this.props.statsIconText}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StatsCard;
