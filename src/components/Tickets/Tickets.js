import React, { useState } from "react";

import TicketCard from "./TicketCard.js";
import classes from "./Tickets.module.css";

const DUMMY_TICKETS = [
    {
        id: 1,
        title: "Ticket 1"
    },
    {
        id: 2,
        title: "Ticket 2",
    },
    {
        id: 3,
        title: "Ticket 3",
    },
    {
        id: 4,
        title: "Ticket 4",
    },
    {
        id: 5,
        title: "Ticket 5",
    },
    {
        id: 6,
        title: "Ticket 6",
    },
    {
        id: 7,
        title: "Ticket 7",
    },
    {
        id: 8,
        title: "Ticket 8",
    },
    {
        id: 9,
        title: "Ticket 9",
    },
    {
        id: 10,
        title: "Ticket 10",
    },
    {
        id: 11,
        title: "Ticket 11",
    },
    {
        id: 12,
        title: "Ticket 12",
    },
    {
        id: 13,
        title: "Ticket 13",
    }
];

const Tickets = (props) => {
  const [tickets, setTickets] = useState(DUMMY_TICKETS);

  const tickets_view = tickets.map((ticket) => {
    return <TicketCard title={ticket.title}/>
  });

  return <div className={classes["tickets"]}>
    {tickets_view}
  </div>;
};

export default Tickets;
