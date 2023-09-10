import React, { useState } from "react";

import classes from "./EventsList.module.css";

import { useEventsContext } from "../../../hooks/EventsContext";
import { Pages, usePageContext } from "../../../hooks/PageContext";
import { formatDate } from "../../../lib/Utils";

import { filterEvents } from "../../UI/EventFilter/EventFilter";

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
  }

  const eventRows = filteredEvents.map((event, _) => (
    <tr key={event.index} onClick={() => onChooseEvent(event)}>
      <td>{event.index + 1}</td>
      <td>{event.title}</td>
      <td>{formatDate(event.startDate) + " - " + formatDate(event.endDate)}</td>
      <td>{event.location}</td>
    </tr>
  ));

  return (
    <div className={classes["events-list"]}>
      <table>
        <thead>
          <tr>
            <th>
              <div>
                <p onClick={() => sortByColumn("index")}>#</p>
              </div>
            </th>
            <th>
              <div>
                <p onClick={() => sortByColumn("title")}>Title</p>
              </div>
            </th>
            <th>
              <div>
                <p onClick={() => sortByColumn("date")}>Date</p>
              </div>
            </th>
            <th>
              <div>
                <p onClick={() => sortByColumn("location")}>Location</p>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>{eventRows}</tbody>
      </table>
    </div>
  );
};

export default EventsList;
