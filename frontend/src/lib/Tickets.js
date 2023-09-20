import { useEffect, useState } from "react";
import { useCardano } from "@cardano-foundation/cardano-connect-with-wallet";

import { getUserTickets, getEvent } from "./Events";

class Ticket {
  constructor(id, event) {
    this.id = id;
    this.event = event;
  }
}

export const useTickets = () => {
  const { stakeAddress } = useCardano();
  const [tickets, setTickets] = useState([]);

  // loading tickets
  useEffect(() => {
    if (stakeAddress) {
      getUserTickets(stakeAddress).then(async (user_tickets) => {
        if (user_tickets) {
          let tickets = [];
          let events = {};
          for (const ticket of user_tickets) {
            let event = events[ticket.event_id];
            if (!event) {
              console.log("Event not found");
              event = await getEvent(ticket.event_id);
              events[ticket.event_id] = event;
            }
            tickets.push(new Ticket(ticket.id, event));
          }
          setTickets(tickets);
        }
      });
    }
  }, [stakeAddress]);

  return tickets;
};
