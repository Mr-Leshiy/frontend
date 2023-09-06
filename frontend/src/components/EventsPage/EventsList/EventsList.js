import React from "react";

import classes from "./EventsList.module.css";
import { formatDate, formatTime } from "../../../lib/Utils";
import { useEventsContext } from "../../../hooks/EventsContext";
import DeleteIcon from "../../../assets/delete.svg";

const EventsList = (props) => {
  const { events, setEvents } = useEventsContext();

  const onRemoveHandler = (index) => {
    setEvents((events) => {
      return events.filter((_, i) => i !== index);
    });
  };

  const { title } = props.filterOptions;
  const filteredEvents = events.filter((event) => {
    if (title) {
      return event.title.toLowerCase().includes(title.toLowerCase());
    }
    return true;
  });

  const eventRows = filteredEvents.map((event, i) => (
    <tr key={i}>
      <td>{i + 1}</td>
      <td>{event.title}</td>
      <td>{formatDate(event.date)}</td>
      <td>{formatTime(event.date)}</td>
      <td>{event.location}</td>
      <td>
        <img src={DeleteIcon} alt="" onClick={() => onRemoveHandler(i)} />
      </td>
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
            <th>Time</th>
            <th>Location</th>
            <th />
          </tr>
        </thead>
        <tbody>{eventRows}</tbody>
      </table>
    </div>
  );
};

export default EventsList;
