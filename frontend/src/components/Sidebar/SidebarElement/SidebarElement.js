import React from "react";

import classes from "./SidebarElement.module.css";

const SidebarElement = (props) => {
  return (
    <div
      className={`${classes["sidebar-element"]} ${
        props.isActive ? classes["sidebar-element-active"] : ""
      }`}
      onClick={props.onClick}
    >
      {props.text}
    </div>
  );
};

export default SidebarElement;
