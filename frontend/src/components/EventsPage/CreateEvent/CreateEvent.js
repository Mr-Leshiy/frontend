import React, { useState } from "react";
import Modal from "react-modal";

import classes from "./CreateEvent.module.css";
import Button from "../../UI/Button/Button.js";
import { useEventsContext } from "../../../hooks/EventsContext";

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
  const { setEvents } = useEventsContext();
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

  const inputComponent = (name, type, placeholder, maxLength, isRequired) => (
    <div className={classes["input"]}>
      <div className={classes["input-description"]}>Event {name}</div>
      <input
        name={name}
        className={classes["input-data"]}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        required={isRequired}
        onChange={handleOnChange}
      />
    </div>
  );

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setEvents((events) => {
      let date = new Date(`${eventValue.date}T${eventValue.time}`);
      return [...events, { ...eventValue, date: date }];
    });
    props.closeModal();
  };

  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={props.closeModal}
      style={customStyles}
    >
      <div className={classes["create-event-tab"]}>
        <form onSubmit={onSubmitHandler}>
          <div>
            {inputComponent("title", "text", "Title", 50, true)}
            {inputComponent("date", "date", "", "", true)}
            {inputComponent("time", "time", "", "", true)}
            {inputComponent("location", "text", "Location", 50, true)}
            {inputComponent("description", "text", "Description", 200, false)}
          </div>

          <div className={classes["buttons"]}>
            <Button type="submit" className={classes["button"]}>
              Create
            </Button>

            <Button className={classes["button"]} onClick={props.closeModal}>
              Close
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default CreateEvent;
