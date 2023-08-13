import React from "react";

import classes from "./SidebarElement.module.css";

const SidebarElement = (props) => {
  return <div className={classes["sidebar-element"]}>{props.children}</div>;
};

export default SidebarElement;
