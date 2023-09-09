import React, { useState } from "react";

import classes from "./TicketsList.module.css";

import { getTickets } from "../../../lib/Tickets";

import { filterEvents } from "../../UI/EventFilter/EventFilter";
import TicketCard from "../TicketCard/TicketCard.js";

const TicketsList = (props) => {
  const [tickets] = useState(getTickets());

  const filteredTickets = filterEvents(
    tickets,
    (ticket) => ticket.event,
    props.filterOptions,
  );

  const tickets_view = filteredTickets.map((ticket) => {
    return <TicketCard ticket={ticket} key={ticket.id} />;
  });

  return <div className={classes["tickets-list"]}>{tickets_view}</div>;
};

export default TicketsList;
