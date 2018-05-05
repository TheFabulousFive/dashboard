import {
  Col,
  Grid,
  Row
} from "react-bootstrap";
import React, { Component } from "react";

import Button from "components/CustomButton/CustomButton.jsx";
import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";

class UserProfile extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="Edit Event Information"
                content={
                  <form>
                    <FormInputs
                      ncols={["col-md-5"]}
                      proprieties={[
                        {
                          label: "Event Name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Electric Daisy Carnival Orlando 2018"
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-5"]}
                      proprieties={[
                        {
                          label: "Venue Address",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "555 Headliner Ln., Orlando, FL"
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-5"]}
                      title="Add a New Artist"
                      proprieties={[
                        {
                          label: "Artist Name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "DJ Khaled"
                        }
                      ]}
                    />

                    <FormInputs
                      ncols={["col-md-12"]}
                      proprieties={[
                        {
                          label: "Address",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "555 Headliner Ln., Orlando, FL",
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-3", "col-md-3", "col-md-3"]}
                      proprieties={[
                        {
                          label: "City",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "City",
                        },
                        {
                          label: "Country",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Country"
                        },
                        {
                          label: "Postal Code",
                          type: "number",
                          bsClass: "form-control",
                          placeholder: "ZIP Code"
                        }
                      ]}
                    />
                    <Button bsStyle="info" pullRight fill type="submit">
                      Update Festival
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default UserProfile;
