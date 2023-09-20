import React, { createContext, useContext, useEffect, useState } from "react";
import { useCardano } from "@cardano-foundation/cardano-connect-with-wallet";

import { getUserEvents } from "../lib/Events";
import { useLocalStorage } from "./LocalStorage";
import { usePageContext, Pages } from "./PageContext";

export class Event {
  constructor(
    title,
    startDate,
    endDate,
    location,
    website,
    description,
    image,
    published,
  ) {
    this.title = title;
    this.startDate = startDate;
    this.endDate = endDate;
    this.location = location;
    this.website = website;
    this.description = description;
    this.image = image;
    this.published = published;
  }
}

const EventsContext = createContext(null);

const EventsContextProvider = ({ children }) => {
  const { activePage } = usePageContext();
  const [localStorageEvents, setLocalStorageEvents] = useLocalStorage(
    "events",
    [],
  );
  const [publishedEvents, setPublishedEvents] = useState([]);
  const [events, setEvents] = useState([]);
  const { stakeAddress } = useCardano();

  // loading events
  useEffect(() => {
    if (stakeAddress && activePage.type === Pages.events) {
      getUserEvents(stakeAddress).then((events) => {
        if (events) {
          events = events.map(
            (event) =>
              new Event(
                event.title,
                new Date(event.startDate),
                new Date(event.endDate),
                event.location,
                event.website,
                event.description,
                event.image,
                true,
              ),
          );
          setPublishedEvents(events);
        }
      });
    }
  }, [activePage, stakeAddress]);

  useEffect(() => {
    setEvents([
      ...localStorageEvents.map(
        (event) =>
          new Event(
            event.title,
            new Date(event.startDate),
            new Date(event.endDate),
            event.location,
            event.website,
            event.description,
            event.image,
          ),
      ),
    ]);
  }, [publishedEvents, localStorageEvents]);

  return (
    <EventsContext.Provider value={{ events, setEvents: null }}>
      {children}
    </EventsContext.Provider>
  );
};

export const useEventsContext = () => {
  const context = useContext(EventsContext);
  if (!context) {
    throw new Error(
      "useEventsContext must be used within a EventsContextProvider",
    );
  }
  return context;
};

export default EventsContextProvider;
