import React from "react";

import classes from "./TicketCard.module.css";

const TicketCard = (props) => {
  return (
    <div className={classes["ticket-card"]}>
      <h5>{props.title}</h5>
      <h5>
        {props.date.toLocaleDateString("en-us", {
          day: "numeric",
          year: "numeric",
          month: "short",
        })}
      </h5>
    </div>
  );
};

export default TicketCard;
