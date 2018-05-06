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
                content=
                {
                  <h1>Add A New Set or Add a new Artist</h1>
                }
                />
              <Card
                content={
                  <form>
                    <h1>Add New Artist</h1>
                    <FormInputs
                      ncols={["col-md-5", "col-md-3", "col-md-3"]}
                      proprieties={[
                        {
                          label: "Artist Name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "DJ Khaled"
                        },                  
                        {
                          label: "Set time start",
                          type: "number",
                          bsClass: "form-control",
                          placeholder: "9:00"
                        },
                        {
                          label: "Set time complete",
                          type: "number",
                          bsClass: "form-control",
                          placeholder: "9:45"
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-8"]}
                      proprieties={[
                        {
                          label: "Stage Name",
                          type: "number",
                          bsClass: "form-control",
                          placeholder: "The Boombox"
                        }
                      ]}
                    />
                    <Button bsStyle="info" pullRight fill type="submit">
                      Save
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
