import React from "react";

import classes from "./Sidebar.module.css";
import SidebarElement from "./SidebarElement";

const Sidebar = (props) => {
  return (
    <div className={classes["sidebar"]}>
      <ul className={classes["nav-elements"]}>
        <li>
          <SidebarElement text="Home"/>
        </li>
        <li>
          <SidebarElement text="About"/>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
