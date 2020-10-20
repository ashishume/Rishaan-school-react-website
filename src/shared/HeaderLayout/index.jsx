import React, { Fragment } from "react";
import './styles.scss'
const HeaderLayout = ({ title }) => {
  return (
    <Fragment>
      <div className="header-title">{title}</div>
    </Fragment>
  );
};

export default HeaderLayout;
