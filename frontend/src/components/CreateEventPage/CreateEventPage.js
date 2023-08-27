import React, { useState } from "react";
import { useCardano } from "@cardano-foundation/cardano-connect-with-wallet";

import classes from "./CreateEventPage.module.css";
import PageTitle from "../UI/PageTitle/PageTitle.js";
import Button from "../UI/Button/Button.js";

const CreateEventPage = () => {
  const { isConnected } = useCardano();
  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [timeValue, setTimeValue] = useState("");
  const [venueValue, setVenueValue] = useState("");

  const inlineStyles = {
    pointerEvents: isConnected ? "auto" : "none",
    opacity: isConnected ? "1" : "0.5",
  };

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
    <div className={classes["create-event-page"]}>
      <PageTitle title="Create Your Event" />
      <div style={inlineStyles} className={classes["create-event-tab"]}>
        {inputTitleComponent}
        {inputDescriptionComponent}
        {inputDateComponent}
        {inputTimeComponent}
        {inputVenueComponent}
        <Button className={classes["create-event-button"]}> Create </Button>
      </div>
    </div>
  );
};

export default CreateEventPage;
