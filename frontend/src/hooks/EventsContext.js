import React, { createContext, useContext } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";

const EventsContext = createContext(null);

const EventsContextProvider = ({ children }) => {
  const [events, setEvents] = useLocalStorage("events", []);

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
