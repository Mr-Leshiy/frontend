import React from "react";

import classes from "./Page.module.css";
import PageTitle from "../PageTitle/PageTitle";

const Page = (props) => {
  return (
    <div className={classes["page"]}>
      <PageTitle title={props.title} />
      {props.children}
    </div>
  );
};

export default Page;
