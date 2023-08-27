import React, { useState } from "react";

import classes from "./CreateEventTab.module.css";
import Button from "../../UI/Button/Button.js";

const CreateEventTab = () => {
  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [timeValue, setTimeValue] = useState("");
  const [venueValue, setVenueValue] = useState("");

  const inputTitleComponent = (
    <div className={classes["input-title"]}>
      <input
        className={classes["input-title-data"]}
        type="text"
        placeholder="Event Title"
        maxLength={50}
        value={titleValue}
        onChange={(e) => setTitleValue(e.target.value)}
      />
    </div>
  );

  const inputDescriptionComponent = (
    <div className={classes["input-title"]}>
      <input
        className={classes["input-title-data"]}
        type="text"
        placeholder="Event Description"
        maxLength={200}
        value={descriptionValue}
        onChange={(e) => setDescriptionValue(e.target.value)}
      />
    </div>
  );

  const inputDateComponent = (
    <div className={classes["input-title"]}>
      <input
        className={classes["input-title-data"]}
        type="date"
        value={dateValue}
        onChange={(e) => setDateValue(e.target.value)}
      />
    </div>
  );

  const inputTimeComponent = (
    <div className={classes["input-title"]}>
      <input
        className={classes["input-title-data"]}
        type="time"
        value={timeValue}
        onChange={(e) => setTimeValue(e.target.value)}
      />
    </div>
  );

  const inputVenueComponent = (
    <div className={classes["input-title"]}>
      <input
        className={classes["input-title-data"]}
        type="text"
        placeholder="Venue"
        value={venueValue}
        onChange={(e) => setVenueValue(e.target.value)}
      />
    </div>
  );

  return (
    <div className={classes["create-event-tab"]}>
      {inputTitleComponent}
      {inputDescriptionComponent}
      {inputDateComponent}
      {inputTimeComponent}
      {inputVenueComponent}
      <Button className={classes["create-event-button"]}> Create </Button>
    </div>
  );
};

export default CreateEventTab;
