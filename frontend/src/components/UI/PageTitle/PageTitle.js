import React from "react";

import classes from "./PageTitle.module.css";

const PageTitle = ({ title }) => {
  return <div className={classes["title"]}>{title}</div>;
};

export default PageTitle;
