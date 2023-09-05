import React from "react";
import { usePageContext, Pages } from "../../hooks/PageContext";
import TicketsPage from "../TicketsPage/TicketsPage";
import EventsPage from "../EventsPage/EventsPage";
import EventsContextProvider from "../../hooks/EventsContext";

const PageHandler = () => {
  const { activePage } = usePageContext();

  return (
    <EventsContextProvider>
      {activePage === Pages.tickets ? <TicketsPage /> : null}
      {activePage === Pages.events ? <EventsPage /> : null}
    </EventsContextProvider>
  );
};

export default PageHandler;
