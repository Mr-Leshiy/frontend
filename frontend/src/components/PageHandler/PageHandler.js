import React from "react";
import { usePageContext, Pages } from "../../hooks/PageContext";
import TicketsPage from "../TicketsPage/TicketsPage";
import EventsPage from "../EventsPage/EventsPage";

const PageHandler = () => {
  const { activePage } = usePageContext();

  return (
    <>
      {activePage === Pages.tickets ? <TicketsPage /> : null}
      {activePage === Pages.events ? <EventsPage /> : null}
    </>
  );
};

export default PageHandler;
