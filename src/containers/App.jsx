import React, { Fragment } from "react";
import "./ImageCarousel";
import ImageCarousel from "./ImageCarousel";
import Nav from "../shared/components/Nav/Navbar";
import IntroductionTitle from "./IntroductionTitle";
const App = () => {
  return (
    <Fragment>
      <Nav />
      <ImageCarousel />
      <IntroductionTitle />
    </Fragment>
  );
};

export default App;
