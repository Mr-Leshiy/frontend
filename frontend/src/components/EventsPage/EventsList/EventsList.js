import React from "react";

import classes from "./EventsList.module.css";

import { useEventsContext } from "../../../hooks/EventsContext";
import { Pages, usePageContext } from "../../../hooks/PageContext";
import { formatDate } from "../../../lib/Utils";

import { filterEvents } from "../../UI/EventFilter/EventFilter";

const EventsList = (props) => {
  const { setActivePage } = usePageContext();
  const { events } = useEventsContext();

  // const onRemoveHandler = (index) => {
  //   setEvents((events) => {
  //     return events.filter((_, i) => i !== index);
  //   });
  // };

  const filteredEvents = filterEvents(
    events,
    (event) => event,
    props.filterOptions,
  );

  const onChooseEvent = (event, index) => {
    setActivePage({ type: Pages.event, props: { eventIndex: index } });
  };

  const eventRows = filteredEvents.map((event, i) => (
    <tr key={i} onClick={() => onChooseEvent(event, i)}>
      <td>{i + 1}</td>
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
            <th>#</th>
            <th>Title</th>
            <th>Date</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>{eventRows}</tbody>
      </table>
    </div>
  );
};

export default EventsList;
