import React from "react";

import classes from "./Sidebar.module.css";
import SidebarElement from "./SidebarElement/SidebarElement.js";
import { usePageContext, Pages } from "../../hooks/PageContext";

const Sidebar = () => {
  const { activePage, setActivePage } = usePageContext();

  return (
    <div className={classes["sidebar"]}>
      <ul className={classes["nav-elements"]}>
        <li>
          <SidebarElement
            text="Tickets"
            isActive={activePage === Pages.tickets}
            onClick={() => setActivePage(Pages.tickets)}
          />
        </li>
        <li>
          <SidebarElement
            text="Events"
            isActive={activePage === Pages.events}
            onClick={() => setActivePage(Pages.events)}
          />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
