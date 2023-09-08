import React, { useState } from "react";

import classes from "./EventFilter.module.css";

export const filterEvents = (list, getEvent, filterOptions) => {
  const filteredEvents = list.filter((element) => {
    const event = getEvent(element);
    if (filterOptions.title_or_location) {
      const title_or_location = filterOptions.title_or_location.toLowerCase();
      return (
        event.title.toLowerCase().includes(title_or_location) ||
        event.location.toLowerCase().includes(title_or_location)
      );
    }
    return true;
  });
  return filteredEvents;
};

const EventFilter = (props) => {
  const [textValue, setTextValue] = useState("");

  const onChange = (e) => {
    const filterOptions = {
      title_or_location: e.target.value,
    };
    setTextValue(filterOptions.title_or_location);
    props.onFilter(filterOptions);
  };

  return (
    <div className={classes["event-filter"]}>
      <input
        type="text"
        value={textValue}
        placeholder="Search title, location"
        onChange={onChange}
      />
    </div>
  );
};

export default EventFilter;
