import React from "react";

import classes from "./Page.module.css";

const Page = ({ children }) => {
  return <div className={classes["page"]}>{children}</div>;
};

export default Page;
