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
    <div className={classes["input"]}>
      <div className={classes["input-description"]}>Event Title</div>
      <input
        className={classes["input-data"]}
        type="text"
        placeholder="Title"
        maxLength={50}
        value={titleValue}
        onChange={(e) => setTitleValue(e.target.value)}
      />
    </div>
  );

  const inputDescriptionComponent = (
    <div className={classes["input"]}>
      <div className={classes["input-description"]}>Event Description</div>
      <textarea
        className={classes["input-data"]}
        type="text"
        placeholder="Description"
        maxLength={200}
        value={descriptionValue}
        onChange={(e) => setDescriptionValue(e.target.value)}
      />
    </div>
  );

  const inputDateComponent = (
    <div className={classes["input"]}>
      <div className={classes["input-description"]}>Event Date</div>
      <input
        className={classes["input-data"]}
        type="date"
        value={dateValue}
        onChange={(e) => setDateValue(e.target.value)}
      />
    </div>
  );

  const inputTimeComponent = (
    <div className={classes["input"]}>
      <div className={classes["input-description"]}>Event Time</div>
      <input
        className={classes["input-data"]}
        type="time"
        value={timeValue}
        onChange={(e) => setTimeValue(e.target.value)}
      />
    </div>
  );

  const inputVenueComponent = (
    <div className={classes["input"]}>
      <div className={classes["input-description"]}>Event Venue</div>
      <input
        className={classes["input-data"]}
        type="text"
        placeholder="Venue"
        value={venueValue}
        onChange={(e) => setVenueValue(e.target.value)}
      />
    </div>
  );

  return (
    <div className={classes["create-event-tab"]}>
      <div>
        {inputTitleComponent}
        {inputDescriptionComponent}
        {inputDateComponent}
        {inputTimeComponent}
        {inputVenueComponent}
      </div>
      <Button className={classes["create-event-button"]}> Create </Button>
    </div>
  );
};

export default CreateEventTab;
