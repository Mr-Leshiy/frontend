import React, { useState } from "react";
import Modal from "react-modal";

import classes from "./CreateEvent.module.css";
import Button from "../../UI/Button/Button.js";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "none",
    border: "none",
  },
};

const CreateEvent = (props) => {
  const [eventValue, setEventValue] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
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

  const inputLocationComponent = (
    <div className={classes["input"]}>
      <div className={classes["input-description"]}>Event Location</div>
      <input
        name="location"
        className={classes["input-data"]}
        type="text"
        placeholder="Location"
        value={eventValue.location}
        onChange={handleOnChange}
      />
    </div>
  );

  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={props.closeModal}
      style={customStyles}
    >
      <div className={classes["create-event-tab"]}>
        <div>
          {inputTitleComponent}
          {inputDateComponent}
          {inputTimeComponent}
          {inputLocationComponent}
          {inputDescriptionComponent}
        </div>

        <div className={classes["buttons"]}>
          <Button
            className={classes["button"]}
            onClick={() => {
              console.log(eventValue);
            }}
          >
            Create
          </Button>
          <Button className={classes["button"]} onClick={props.closeModal}>
            Close
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default CreateEvent;
