import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./styles.scss";
import GalleryImages from "../../assets/gallery.json";
const Gallery = () => {
  return (
    <Fragment>
      <Container>
        <Row>
          <Col xs={12} md={12}>
            <h2 className="gallery-header">Gallery</h2>
            {GalleryImages.map((value, i) => {
              return (
                <img
                  key={i}
                  className="gallery-image"
                  src={value.image}
                  alt={value.title}
                />
              );
            })}
          </Col>
          <Col>
            <div className="view-more">View more</div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Gallery;
