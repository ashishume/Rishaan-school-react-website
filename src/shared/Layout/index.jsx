import React, { Fragment } from "react";
import "./style.scss";
const Layout = (props) => {
  return (
    <Fragment>
      <div className="top-header">
        <p className="header-text">
          Call Us : (0177) 2620880, +91-78077-36880 (for Admissions Only) |
          Email Us : secy@bishopcotton.com
        </p>
      </div>
      {props.children}
    </Fragment>
  );
};

export default Layout;
