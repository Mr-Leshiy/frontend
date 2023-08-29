import React from "react";

import classes from "./Sidebar.module.css";
import SidebarElement from "./SidebarElement/SidebarElement.js";
import { Pages } from "../../App";

const Sidebar = (props) => {
  return (
    <div className={classes["sidebar"]}>
      <ul className={classes["nav-elements"]}>
        <li>
          <SidebarElement
            text="Tickets"
            isActive={props.currentPage === Pages.tickets}
            onClick={() => props.setPage(Pages.tickets)}
          />
        </li>
        <li>
          <SidebarElement
            text="Create Event"
            isActive={props.currentPage === Pages.create_event}
            onClick={() => props.setPage(Pages.create_event)}
          />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
