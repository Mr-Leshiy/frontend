import React from "react";

import classes from "./PageTitle.module.css";

const PageTitle = (props) => {
  return <div className={classes["title"]}>{props.title}</div>;
};

export default PageTitle;
