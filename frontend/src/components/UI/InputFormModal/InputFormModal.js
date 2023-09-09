import React, { useState } from "react";

import classes from "./CreateEvent.module.css";

import { useEventsContext, Event } from "../../../hooks/EventsContext";

import Button from "../../UI/Button/Button.js";
import ModalWindow from "../../UI/ModalWindow/ModalWindow";

export const InpputTypes = {
  TEXT: "text",
  DATE: "date",
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

export class Input {
  constructor(description, name, type, placeholder, maxLength, isRequired) {
    this.description = description;
    this.name = name;
    this.type = type;
    this.placeholder = placeholder;
    this.maxLength = maxLength;
    this.isRequired = isRequired;
  }

  buildComponent(handleOnChange) {
    if (this.type === InpputTypes.TEXT) {
      return inputComponent(
        this.description,
        this.name,
        "text",
        this.placeholder,
        this.maxLength,
        this.isRequired,
      );
    }
    if (this.type === InpputTypes.DATE) {
      return (
        <div className={classes["input-date-and-time"]}>
          {inputComponent(
            this.description + " date",
            this.name + "Date",
            "date",
            this.placeholder,
            this.maxLength,
            this.isRequired,
          )}
          {inputComponent(
            this.description + " time",
            this.name + "Time",
            "time",
            this.placeholder,
            this.maxLength,
            this.isRequired,
          )}
        </div>
      );
    }
    return <></>;
  }
}

const CreateEvent = ({ modalIsOpen, closeModal, inputs }) => {
  const [inputValue, setInputValue] = useState({});

  const handleOnChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    closeModal();
  };

  const inputComponents = inputs.map((input) => {
    return input.buildComponent(handleOnChange);
  });

  return (
    <ModalWindow isOpen={modalIsOpen} onRequestClose={closeModal}>
      <div className={classes["input-form-modal"]}>
        <form onSubmit={onSubmitHandler}>
          <div>{inputComponents}</div>

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
    </ModalWindow>
  );
};

export default CreateEvent;
