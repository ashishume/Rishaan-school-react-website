import React, { Fragment } from "react";
import ImageCarousel from "../ImageCarousel";
import Nav from "../../shared/components/Nav/Navbar";
import IntroductionTitle from "../IntroductionTitle";
import OurActivities from "../OurActivities";
import Gallery from "../Gallery";
import Footer from "../Footer";
const Dashboard = () => {
  return (
    <Fragment>
      <Nav />
      <ImageCarousel />
      <IntroductionTitle />
      <OurActivities />
      <Gallery />
      <Footer />
    </Fragment>
  );
};

export default Dashboard;
