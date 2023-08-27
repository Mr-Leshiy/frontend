import React from "react";

import classes from "./PageTitle.module.css";

const PageTitle = (props) => {
  return (
    <div className={classes["title"]}>
      <h1>{props.title}</h1>
    </div>
  );
};

export default PageTitle;
