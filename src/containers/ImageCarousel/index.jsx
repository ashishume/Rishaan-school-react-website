import React, { Fragment } from "react";
import "./styles.scss";

const ImageCarousel = () => {
  return (
    <Fragment>
      <div className="image-container">
        <h1 className="rishaan">Rishaan</h1>
        <h1 className="second-header">International boarding school</h1>
        <p className="sub-header">KNOWLEDGE | HARD WORK | INTELLIGENCE</p>
      </div>
      <div className="crossfade">
        <figure></figure>
        <figure></figure>
        <figure></figure>
        <figure></figure>
        <figure></figure>
        <figure></figure>
      </div>
    </Fragment>
  );
};

export default ImageCarousel;
