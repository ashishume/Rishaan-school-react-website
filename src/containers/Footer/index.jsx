import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./styles.scss";
const Footer = () => {
  return (
    <Fragment>
      <div className="footer-container">
        <Container>
          <Row>
            <Col xs={12} md={4}>
              <div className="social-container">
                <h3 className="footer-heading">Social Media</h3>
                <img
                  src={require("../../assets/social/045-facebook.png")}
                  className="social"
                />
                <img
                  src={require("../../assets/social/034-instagram.png")}
                  className="social"
                />
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="address-container">
                <div className="address">
                  <h3 className="footer-heading">Address</h3>
                  <iframe
                    src={
                      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3434.8414186625205!2d76.70970661445746!3d30.582021799932914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fe9d57ff0304d%3A0xef1c03c37651d584!2sRishaan%20International%20Boarding%20School!5e0!3m2!1sen!2sin!4v1602582925462!5m2!1sen!2sin"
                    }
                    width={"280"}
                    height={"200"}
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                  ></iframe>
                  Sector 104, Banur Landran Highway, Distt, Sahibzada Ajit Singh
                  Nagar, Punjab
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="contact-container">
                <div className="contact">
                  <h3 className="footer-heading">Contact us</h3>
                  Address: Sector 104, Banur Landran Highway, Distt, Sahibzada
                  Ajit Singh Nagar, Punjab Address: BISHOP COTTON SCHOOL, SHIMLA
                  Office (Tel) : (0177) 2620880, ( +91-78077-36880 for
                  Admissions Only ) Email Us: ribs-edu@gmail.com
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default Footer;
