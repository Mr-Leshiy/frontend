import React from "react";

import classes from './Sidebar.module.css'

const Sidebar = (props) => {
return (
<div className={classes['sidebar']}>
    <ul className={classes['nav-links']}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contract</li>
    </ul>
</div>
);
}

export default Sidebar;