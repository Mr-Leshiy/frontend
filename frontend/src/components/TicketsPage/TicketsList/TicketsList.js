import React, { useState } from "react";

import classes from "./TicketsList.module.css";
import TicketCard from "../TicketCard/TicketCard.js";
import { getTickets } from "../../../lib/Tickets";

const TicketsList = (props) => {
  const [tickets] = useState(getTickets());

  const { value } = props.filterOptions;
  const filteredTickets = tickets.filter((ticket) => {
    if (value) {
      const lower_case_value = value.toLowerCase();
      return (
        ticket.event.title.toLowerCase().includes(lower_case_value) ||
        ticket.event.location.toLowerCase().includes(lower_case_value)
      );
    }
    return true;
  });

  const tickets_view = filteredTickets.map((ticket) => {
    return <TicketCard ticket={ticket} key={ticket.id} />;
  });

  return <div className={classes["tickets-list"]}>{tickets_view}</div>;
};

export default TicketsList;
