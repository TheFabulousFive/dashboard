import { Col, Grid, Row, Table } from "react-bootstrap";
import React, { Component } from "react";
import { tdArray, thArray } from "variables/Variables.jsx";

import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";

// import {
//   dataBar,
//   dataPie,
//   dataSales,
//   legendBar,
//   legendPie,
//   legendSales,
//   optionsBar,
//   optionsSales,
//   responsiveBar,
//   responsiveSales
// } from "variables/Variables.jsx";


class Dashboard extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col lg={4} sm={12}>
              <StatsCard
                id="stats-card"
                statsValue="105GB"
                statsText="Capacity"
              />
            </Col>
            <Col lg={4} sm={12}>
              <StatsCard
                id="stats-card"
                statsText="Revenue"
                statsValue="$1,345"
              />
            </Col>
            <Col lg={4} sm={12}>
              <StatsCard
                id="stats-card"
                // bigIcon={<i className="fa fa-twitter text-info" />}
                statsText="Followers"
                statsValue="+45"
              />
            </Col>
          </Row>
          <Col md={12}>
            <Card
              title="Striped Table with Hover"
              category="Here is a subtitle for this table"
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
