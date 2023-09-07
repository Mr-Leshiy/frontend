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
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    location: "",
  });

  const handleOnChange = (e) => {
    setEventValue({ ...eventValue, [e.target.name]: e.target.value });
  };

  const inputComponent = (
    description,
    name,
    type,
    placeholder,
    maxLength,
    isRequired,
  ) => (
    <div className={classes["input"]}>
      <div className={classes["input-description"]}>Event {description}</div>
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
      const startDate = new Date(
        `${eventValue.startDate}T${eventValue.startTime}`,
      );
      const endDate = new Date(`${eventValue.endDate}T${eventValue.endTime}`);
      return [
        ...events,
        { ...eventValue, startDate: startDate, endDate: endDate },
      ];
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
            {inputComponent("title", "title", "text", "Title", 50, true)}
            <div className={classes["input-date-and-time"]}>
              {inputComponent("start date", "startDate", "date", "", "", true)}
              {inputComponent("start time", "startTime", "time", "", "", true)}
            </div>
            <div className={classes["input-date-and-time"]}>
              {inputComponent("end date", "endDate", "date", "", "", true)}
              {inputComponent("end time", "endTime", "time", "", "", true)}
            </div>
            {inputComponent(
              "location",
              "location",
              "text",
              "Location",
              50,
              true,
            )}
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
