import React from "react";

import classes from "./EventsList.module.css";

const EventsList = (props) => {
  let events = [];
  for (let i = 1; i < 5; i++) {
    events.push({
      title: "Event " + i,
    });
  }

  const events_elements = events.map((event) => {
    return (
      <tr>
        <td>{event.title}</td>
      </tr>
    );
  });

  return (
    <div className={classes["events-list"]}>
      <table>
        <thead>
          <tr>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>{events_elements}</tbody>
      </table>
    </div>
  );
};

export default EventsList;
