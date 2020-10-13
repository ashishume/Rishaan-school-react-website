import React, { Fragment } from "react";
import "./styles.scss";
import itemArray from "../../assets/activities.json";
import { Col, Row, Container } from "react-bootstrap";

const OurActivities = () => {
  return (
    <Fragment>
      <Container>
        <Row>
          <Col>
            <div className="activity-container">
              <h1 className="activity-header">Our Activities</h1>
              <div className="sub-header">Our Bestservices for your Kids</div>
              <div className="content-container">
                {itemArray.map((value) => {
                  return (
                    <div className="item" key={value.icon}>
                      <div className="item-icon">
                        <span className="material-icons">{value.icon}</span>
                      </div>
                      <div className="content-area">
                        <div className="item-header">{value.heading}</div>
                        <div className="item-text">{value.text}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default OurActivities;
