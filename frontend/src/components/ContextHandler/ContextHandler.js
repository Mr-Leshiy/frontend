import React from "react";
import EventsContextProvider from "../../hooks/EventsContext";
import EventImagesContextProvider from "../../hooks/EventImagesContext";
import TicketsContextProvider from "../../hooks/TicketsContext";

const ContextHandler = ({ children }) => {
  return (
    <EventsContextProvider>
      <EventImagesContextProvider>
        <TicketsContextProvider>{children}</TicketsContextProvider>
      </EventImagesContextProvider>
    </EventsContextProvider>
  );
};

export default ContextHandler;
