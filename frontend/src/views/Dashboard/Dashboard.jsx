import { Col, Grid, Row, Table } from "react-bootstrap";
import React, { Component } from "react";
import { tdArray, thArray } from "variables/Variables.jsx";

import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";

class Dashboard extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col lg={4} sm={12}>
              <StatsCard
                id="stats-card"
                statsValue="3,257"
                statsText="Total Unique Fans Engaged"
              />
            </Col>
            <Col lg={4} sm={12}>
              <StatsCard
                id="stats-card"
                statsText="Active Stages"
                statsValue="8"
              />
            </Col>
            <Col lg={4} sm={12}>
              <StatsCard
                id="stats-card"
                statsText="Fan Approval"
                statsValue="9.5"
              />
            </Col>
          </Row>
          <Col md={12}>
            <Card
              title="Striped Table with Hover"
              category="Here is a subtitle for this table"
              title="Artist to Fan Engagement"
              category="How each artist is engaging fans in realtime."
              ctTableFullWidth
              ctTableResponsive
              content={
                <Table striped hover>
                  <thead>
                    <tr>
                      {thArray.map((prop, key) => {
                        return <th key={key}>{prop}</th>;
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {tdArray.map((prop, key) => {
                      return (
                        <tr key={key}>
                          {prop.map((prop, key) => {
                            return <td key={key}>{prop}</td>;
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              }
            />
          </Col>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
