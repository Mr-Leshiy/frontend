import React from "react";

import { usePageContext, Pages } from "../../hooks/PageContext";

import TicketsPage from "../TicketsPage/TicketsPage";
import EventsPage from "../EventsPage/EventsPage";
import EventPage from "../EventPage/EventPage";

const PageHandler = () => {
  const { activePage } = usePageContext();

  return (
    <>
      {activePage.type === Pages.tickets ? (
        <TicketsPage {...activePage.props} />
      ) : null}
      {activePage.type === Pages.events ? (
        <EventsPage {...activePage.props} />
      ) : null}
      {activePage.type === Pages.event ? (
        <EventPage {...activePage.props} />
      ) : null}
    </>
  );
};

export default PageHandler;
