import React from "react";

import classes from "./TicketCard.module.css";

const TicketCard = (props) => {
    return (
        <div className={classes["ticket-card"]}>
            <h5>{props.title}</h5>
        </div>
    );
};

export default TicketCard;