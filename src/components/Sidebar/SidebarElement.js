import React from "react";

import classes from "./SidebarElement.module.css";

const SidebarElement = (props) => {
  return <div className={classes["sidebar-element"]}>{props.text}</div>;
};

export default SidebarElement;
