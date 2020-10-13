import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./styles.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import messageArray from "../../assets/message.json";
import noticeArray from "../../assets/notice.json";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const IntroductionTitle = () => {
  return (
    <Fragment>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <div className="heading1">
              <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                infinite={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                {messageArray.map((value) => {
                  return (
                    <div className="message-container" key={value.image}>
                      <h2 className="message-header">{value.header}</h2>
                      <img
                        src={value.image}
                        className="profile-image"
                        alt={value.image}
                      />
                      <p className="message">{value.message}</p>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="heading2">
              <h2>Important Notice</h2>
              {noticeArray.map((value, i) => {
                return (
                  <div className="notice-item" key={i}>
                    <div className="notice-header">{value.heading}</div>
                    <div className="notice-text">{value.content}</div>
                    <div className="notice-link">
                      <a
                        href={value.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Click here to know
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default IntroductionTitle;
