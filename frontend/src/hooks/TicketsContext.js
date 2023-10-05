import React, { createContext, useContext, useState, useEffect } from "react";

import { usePageContext, Pages } from "./PageContext";
import { Event } from "./EventsContext";
import { getUserTickets, getEvent } from "../lib/Events";
import { useCardanoWalletContext } from "./WalletContext";

class Ticket {
  constructor(id, event) {
    this.id = id;
    this.event = event;
  }
}

const TicketsContext = createContext(null);

const TicketsContextProvider = ({ children }) => {
  const { stakeAddress } = useCardanoWalletContext();
  const { activePage } = usePageContext();
  const [tickets, setTickets] = useState([]);

  // loading tickets
  useEffect(() => {
    if (stakeAddress && activePage.type === Pages.tickets) {
      getUserTickets(stakeAddress).then(async (user_tickets) => {
        if (user_tickets) {
          let tickets = [];
          let events = {};
          for (const ticket of user_tickets) {
            let event = events[ticket.event_id];
            if (!event) {
              event = await getEvent(ticket.event_id);
              event = new Event(
                event.title,
                new Date(event.startDate),
                new Date(event.endDate),
                event.location,
                event.website,
                event.description,
                event.image,
                true,
              );
              events[ticket.event_id] = event;
            }
            tickets.push(new Ticket(ticket.id, event));
          }
          setTickets(tickets);
        }
      });
    }
  }, [stakeAddress, activePage]);

  return (
    <TicketsContext.Provider value={{ tickets }}>
      {children}
    </TicketsContext.Provider>
  );
};

export const useTicketsContext = () => {
  const context = useContext(TicketsContext);
  if (!context) {
    throw new Error(
      "useTicketsContext must be used within a TicketsContextProvider",
    );
  }
  return context;
};

export default TicketsContextProvider;
