import React, { useState } from "react";

import classes from "./EventFilter.module.css";

const EventFilter = (props) => {
  const [textValue, setTextValue] = useState("");

  const onChange = (e) => {
    const filterOptions = {
      value: e.target.value,
    };
    setTextValue(filterOptions.value);
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
