import React from "react";

import classes from "./EventsList.module.css";
import { formatDate, formatTime } from "../../../lib/Utils";

const EventsList = (props) => {
  const events = Array.from({ length: 4 }, (_, i) => ({
    id: i + 1,
    title: `Event ${i + 1}`,
    date: new Date(),
    location: `Location ${i + 1}`,
    description: `Description ${i + 1}`,
  }));
  const filteredEvents = events.filter((event) => {
    if (props.filterOptions.title) {
      return event.title
        .toLowerCase()
        .includes(props.filterOptions.title.toLowerCase());
    }
    return true;
  });
  const eventRows = filteredEvents.map((event) => (
    <tr>
      <td>{event.id}</td>
      <td>{event.title}</td>
      <td>{formatDate(event.date)}</td>
      <td>{formatTime(event.date)}</td>
      <td>{event.location}</td>
    </tr>
  ));

  return (
    <div className={classes["events-list"]}>
      <table>
        <thead>
          <th>#</th>
          <th>Title</th>
          <th> Date</th>
          <th>Time</th>
          <th>Location</th>
        </thead>
        <tbody>{eventRows}</tbody>
      </table>
    </div>
  );
};

export default EventsList;
