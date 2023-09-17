import React, { useState } from "react";

import classes from "./EventsList.module.css";

import { useEventsContext } from "../../../hooks/EventsContext";
import { Pages, usePageContext } from "../../../hooks/PageContext";
import { formatDate } from "../../../lib/Utils";

import { filterEvents } from "../../UI/EventFilter/EventFilter";
import Table, { HeadElemenet, RowElement } from "../../UI/Table/Table";

const EventsList = ({ filterOptions }) => {
  const { setActivePage } = usePageContext();
  const { events } = useEventsContext();
  const filteredEvents = filterEvents(
    events.map((event, index) => ({ ...event, index })),
    (event) => event,
    filterOptions,
  );
  const [sorting, setSorting] = useState({ column: null, direction: "asc" });

  const onChooseEvent = (event) => {
    setActivePage({ type: Pages.event, props: { eventIndex: event.index } });
  };

  const sortByColumn = (column) => {
    // Toggle sorting direction if the same column is clicked again
    if (sorting.column === column) {
      setSorting({
        column,
        direction: sorting.direction === "asc" ? "desc" : "asc",
      });
    } else {
      setSorting({ column, direction: "asc" });
    }
  };

  // Sort the events based on the selected column and direction
  if (sorting.column === "index") {
    filteredEvents.sort((a, b) => {
      const direction = sorting.direction === "asc" ? 1 : -1;
      return direction * (a.index - b.index);
    });
  } else if (sorting.column === "title") {
    filteredEvents.sort((a, b) => {
      const direction = sorting.direction === "asc" ? 1 : -1;
      return direction * a.title.localeCompare(b.title);
    });
  } else if (sorting.column === "date") {
    filteredEvents.sort((a, b) => {
      const direction = sorting.direction === "asc" ? 1 : -1;
      return direction * (a.startDate - b.startDate);
    });
  } else if (sorting.column === "location") {
    filteredEvents.sort((a, b) => {
      const direction = sorting.direction === "asc" ? 1 : -1;
      return direction * a.location.localeCompare(b.location);
    });
  } else if (sorting.column === "published") {
    filteredEvents.sort((a, b) => {
      const direction = sorting.direction === "asc" ? 1 : -1;
      return direction * (Boolean(a.published) - Boolean(b.published));
    });
  }

  const eventRows = filteredEvents.map(
    (event, _) =>
      new RowElement(event.index, () => onChooseEvent(event), [
        event.index + 1,
        event.title,
        formatDate(event.startDate) + " - " + formatDate(event.endDate),
        event.location,
        event.published ? "Yes" : "No",
      ]),
  );

  const head = [
    new HeadElemenet("#", () => sortByColumn("index")),
    new HeadElemenet("Title", () => sortByColumn("title")),
    new HeadElemenet("Date", () => sortByColumn("date")),
    new HeadElemenet("Location", () => sortByColumn("location")),
    new HeadElemenet("Published", () => sortByColumn("published")),
  ];

  return (
    <div className={classes["events-list"]}>
      <Table head={head} rows={eventRows} />
    </div>
  );
};

export default EventsList;
