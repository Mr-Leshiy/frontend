import React from "react";

import classes from "./EventsList.module.css";

const EventsList = (props) => {
  const events = Array.from({ length: 4 }, (_, i) => ({
    title: `Event ${i + 1}`,
    date: new Date(),
    location: `Location ${i + 1}`,
    description: `Description ${i + 1}`,
  }));
  const eventRows = events.map((event) => (
    <tr>
      <td>{event.title}</td>
    </tr>
  ));

  return (
    <div className={classes["events-list"]}>
      <table>
        <thead>
          <tr>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>{eventRows}</tbody>
      </table>
    </div>
  );
};

export default EventsList;
