import React, { createContext, useContext } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";

export class Event {
  constructor(
    title,
    startDate,
    endDate,
    location,
    website,
    description,
    image,
  ) {
    this.title = title;
    this.startDate = startDate;
    this.endDate = endDate;
    this.location = location;
    this.website = website;
    this.description = description;
    this.image = image;
  }
}

const EventsContext = createContext(null);

const EventsContextProvider = ({ children }) => {
  const [localStorageEvents, setEvents] = useLocalStorage("events", []);

  const events = localStorageEvents.map(
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
  );

  return (
    <EventsContext.Provider value={{ events, setEvents }}>
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
