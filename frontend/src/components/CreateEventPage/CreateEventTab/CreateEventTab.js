import React, { useState } from "react";

import classes from "./CreateEventTab.module.css";
import Button from "../../UI/Button/Button.js";

const CreateEventTab = () => {
  const [eventValue, setEventValue] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    venue: "",
  });

  function handleOnChange(e) {
    setEventValue({ ...eventValue, [e.target.name]: e.target.value });
  }

  const inputTitleComponent = (
    <div className={classes["input"]}>
      <div className={classes["input-description"]}>Event Title</div>
      <input
        name="title"
        className={classes["input-data"]}
        type="text"
        placeholder="Title"
        maxLength={50}
        value={eventValue.title}
        onChange={handleOnChange}
      />
    </div>
  );

  const inputDescriptionComponent = (
    <div className={classes["input"]}>
      <div className={classes["input-description"]}>Event Description</div>
      <textarea
        name="description"
        className={classes["input-data"]}
        type="text"
        placeholder="Description"
        maxLength={200}
        value={eventValue.description}
        onChange={handleOnChange}
      />
    </div>
  );

  const inputDateComponent = (
    <div className={classes["input"]}>
      <div className={classes["input-description"]}>Event Date</div>
      <input
        name="date"
        className={classes["input-data"]}
        type="date"
        value={eventValue.date}
        onChange={handleOnChange}
      />
    </div>
  );

  const inputTimeComponent = (
    <div className={classes["input"]}>
      <div className={classes["input-description"]}>Event Time</div>
      <input
        name="time"
        className={classes["input-data"]}
        type="time"
        value={eventValue.time}
        onChange={handleOnChange}
      />
    </div>
  );

  const inputVenueComponent = (
    <div className={classes["input"]}>
      <div className={classes["input-description"]}>Event Venue</div>
      <input
        name="venue"
        className={classes["input-data"]}
        type="text"
        placeholder="Venue"
        value={eventValue.venue}
        onChange={handleOnChange}
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
      <Button
        className={classes["create-event-button"]}
        onClick={() => {
          console.log(eventValue);
        }}
      >
        Create
      </Button>
    </div>
  );
};

export default CreateEventTab;
