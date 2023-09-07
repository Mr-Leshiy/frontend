import React from "react";

import { usePageContext, Pages } from "../../hooks/PageContext";
import EventsContextProvider from "../../hooks/EventsContext";
import TicketsPage from "../TicketsPage/TicketsPage";
import EventsPage from "../EventsPage/EventsPage";
import EventPage from "../EventPage/EventPage";

const PageHandler = () => {
  const { activePage } = usePageContext();

  return (
    <EventsContextProvider>
      {activePage.type === Pages.tickets ? (
        <TicketsPage {...activePage.props} />
      ) : null}
      {activePage.type === Pages.events ? (
        <EventsPage {...activePage.props} />
      ) : null}
      {activePage.type === Pages.event ? (
        <EventPage {...activePage.props} />
      ) : null}
    </EventsContextProvider>
  );
};

export default PageHandler;
