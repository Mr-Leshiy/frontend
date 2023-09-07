import React from "react";

import classes from "./EventsList.module.css";
import { formatDate } from "../../../lib/Utils";
import { useEventsContext } from "../../../hooks/EventsContext";
import { Pages, usePageContext } from "../../../hooks/PageContext";

const EventsList = (props) => {
  const { setActivePage } = usePageContext();
  const { events } = useEventsContext();

  // const onRemoveHandler = (index) => {
  //   setEvents((events) => {
  //     return events.filter((_, i) => i !== index);
  //   });
  // };

  const { title } = props.filterOptions;
  const filteredEvents = events.filter((event) => {
    if (title) {
      return event.title.toLowerCase().includes(title.toLowerCase());
    }
    return true;
  });

  const onChooseEvent = (event, index) => {
    console.log(event);
    setActivePage({ type: Pages.event, props: { event: event, index: index } });
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
