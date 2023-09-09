import React from "react";

import classes from "./Sidebar.module.css";

import { usePageContext, Pages } from "../../hooks/PageContext";

import SidebarElement from "./SidebarElement/SidebarElement.js";

const Sidebar = () => {
  const { activePage, setActivePage } = usePageContext();

  return (
    <div className={classes["sidebar"]}>
      <ul className={classes["nav-elements"]}>
        <li>
          <SidebarElement
            text="Tickets"
            isActive={activePage.type === Pages.tickets}
            onClick={() => setActivePage({ type: Pages.tickets, props: {} })}
          />
        </li>
        <li>
          <SidebarElement
            text="Events"
            isActive={activePage.type === Pages.events}
            onClick={() => setActivePage({ type: Pages.events, props: {} })}
          />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
