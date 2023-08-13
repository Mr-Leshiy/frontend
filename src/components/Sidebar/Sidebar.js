import React from "react";

import classes from './Sidebar.module.css'
import SidebarElement from "./SidebarElement";

const Sidebar = (props) => {
return (
<div className={classes['sidebar']}>
    <ul className={classes['nav-elements']}>
        <li><SidebarElement>Home</SidebarElement></li>
        <li><SidebarElement>About</SidebarElement></li>
    </ul>
</div>
);
}

export default Sidebar;