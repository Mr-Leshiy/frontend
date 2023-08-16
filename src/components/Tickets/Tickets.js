import React, { useState } from "react";

import TicketCard from "./TicketCard.js";
import classes from "./Tickets.module.css";

const DUMMY_TICKETS = [
  {
    id: 1,
    title: "Ticket 1",
    date: new Date(2023, 8, 31),
  },
  {
    id: 2,
    title: "Ticket 2",
    date: new Date(2023, 8, 31),
  },
  {
    id: 3,
    title: "Ticket 3",
    date: new Date(2023, 8, 31),
  },
  {
    id: 4,
    title: "Ticket 4",
    date: new Date(2023, 8, 31),
  },
  {
    id: 5,
    title: "Ticket 5",
    date: new Date(2023, 8, 31),
  },
  {
    id: 6,
    title: "Ticket 6",
    date: new Date(2023, 8, 31),
  },
  {
    id: 7,
    title: "Ticket 7",
    date: new Date(2023, 8, 31),
  },
  {
    id: 8,
    title: "Ticket 8",
    date: new Date(2023, 8, 31),
  },
  {
    id: 9,
    title: "Ticket 9",
    date: new Date(2023, 8, 31),
  },
  {
    id: 10,
    title: "Ticket 10",
    date: new Date(2023, 8, 31),
  },
  {
    id: 11,
    title: "Ticket 11",
    date: new Date(2023, 8, 31),
  },
  {
    id: 12,
    title: "Ticket 12",
    date: new Date(2023, 8, 31),
  },
  {
    id: 13,
    title: "Ticket 13",
    date: new Date(2023, 8, 31),
  },
  {
    id: 14,
    title: "Ticket 14",
    date: new Date(2023, 8, 31),
  },
  {
    id: 15,
    title: "Ticket 15",
    date: new Date(2023, 8, 31),
  },
  {
    id: 16,
    title: "Ticket 16",
    date: new Date(2023, 8, 31),
  },
  {
    id: 17,
    title: "Ticket 17",
    date: new Date(2023, 8, 31),
  },
  {
    id: 18,
    title: "Ticket 18",
    date: new Date(2023, 8, 31),
  },
  {
    id: 19,
    title: "Ticket 19",
    date: new Date(2023, 8, 31),
  },
  {
    id: 20,
    title: "Ticket 20",
    date: new Date(2023, 8, 31),
  },
  {
    id: 21,
    title: "Ticket 21",
    date: new Date(2023, 8, 31),
  },
];

const Tickets = (props) => {
  const [tickets] = useState(DUMMY_TICKETS);

  const tickets_view = tickets.map((ticket) => {
    return <TicketCard title={ticket.title} date={ticket.date} />;
  });

  return <div className={classes["tickets"]}>{tickets_view}</div>;
};

export default Tickets;
