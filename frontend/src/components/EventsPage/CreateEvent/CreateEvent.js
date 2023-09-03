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

  const handleOnChange = (e) => {
    setEventValue({ ...eventValue, [e.target.name]: e.target.value });
  };

  const inputComponent = (name, type, placeholder, maxLength, value) => (
    <div className={classes["input"]}>
      <div className={classes["input-description"]}>Event {name}</div>
      <input
        name={name}
        className={classes["input-data"]}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        value={value}
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
          {inputComponent("title", "text", "Title", 50, eventValue.title)}
          {inputComponent("date", "date", "", "", eventValue.date)}
          {inputComponent("time", "time", "", "", eventValue.time)}
          {inputComponent(
            "location",
            "text",
            "Location",
            50,
            eventValue.location,
          )}
          {inputComponent(
            "description",
            "text",
            "Description",
            200,
            eventValue.description,
          )}
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
