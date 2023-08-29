import React, { useState } from "react";

import classes from "./TicketsList.module.css";
import TicketCard from "../TicketCard/TicketCard.js";
import { getTickets } from "../../../lib/Tickets";

const TicketsList = (props) => {
  const [tickets] = useState(getTickets());

  const filteredTickets = tickets.filter((ticket) => {
    if (props.filterOptions.title) {
      return ticket.title.includes(props.filterOptions.title);
    }
    return true;
  });

  const tickets_view = filteredTickets.map((ticket) => {
    return <TicketCard ticket={ticket} />;
  });

  return <div className={classes["tickets-list"]}>{tickets_view}</div>;
};

export default TicketsList;
