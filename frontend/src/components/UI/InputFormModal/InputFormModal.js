import React from "react";

import classes from "./InputFormModal.module.css";

import Button from "../../UI/Button/Button.js";
import ModalWindow from "../../UI/ModalWindow/ModalWindow";
import {
  inputFormatTime,
  inputFormatDate,
  dateFromInput,
} from "../../../lib/Utils";

export const InputTypes = {
  TEXT: "text",
  DATE: "date",
  IMAGE: "image",
};

const inputComponent = (
  description,
  name,
  type,
  placeholder,
  maxLength,
  isRequired,
  initialValue,
) => (
  <div className={classes["input"]}>
    <div className={classes["input-description"]}>{description}</div>
    <input
      name={name}
      className={classes["input-data"]}
      type={type}
      placeholder={placeholder}
      maxLength={maxLength}
      required={isRequired}
      defaultValue={initialValue}
    />
  </div>
);

export class Input {
  constructor(
    description,
    name,
    type,
    placeholder,
    maxLength,
    isRequired,
    initialValue,
  ) {
    this.description = description;
    this.name = name;
    this.type = type;
    this.placeholder = placeholder;
    this.maxLength = maxLength;
    this.isRequired = isRequired;
    this.initialValue = initialValue;
  }

  static retrieveValueFromForm(target) {
    let res = {};
    for (let i = 0; i < target.length; i++) {
      if (target[i].type === "text") {
        res[target[i].name] = target[i].value;
      }
      if (target[i].type === "date") {
        // Date and Time inputs should go one by one
        res[target[i].name] = dateFromInput(target[i].value, target[++i].value);
      }
    }
    return res;
  }

  buildComponent(i) {
    if (this.type === InputTypes.TEXT) {
      return (
        <div key={i}>
          {inputComponent(
            this.description,
            this.name,
            "text",
            this.placeholder,
            this.maxLength,
            this.isRequired,
            this.initialValue,
          )}
        </div>
      );
    }
    if (this.type === InputTypes.DATE) {
      return (
        <div className={classes["input-date-and-time"]} key={i}>
          {inputComponent(
            this.description,
            this.name,
            "date",
            this.placeholder,
            this.maxLength,
            this.isRequired,
            this.initialValue ? inputFormatDate(this.initialValue) : "",
          )}
          {inputComponent(
            "time",
            this.name + "Time",
            "time",
            this.placeholder,
            this.maxLength,
            this.isRequired,
            this.initialValue ? inputFormatTime(this.initialValue) : "",
          )}
        </div>
      );
    }
    return <></>;
  }
}

const InputFormModal = ({
  modalIsOpen,
  closeModal,
  inputs,
  submitHandler,
  submitButtonText,
}) => {
  const inputComponents = inputs
    ? inputs.map((input, i) => input.buildComponent(i))
    : null;

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (submitHandler) {
      let inputValue = Input.retrieveValueFromForm(event.target);
      submitHandler(inputValue);
    }
    closeModal();
  };

  return (
    <ModalWindow isOpen={modalIsOpen} onRequestClose={closeModal}>
      <form onSubmit={onSubmitHandler} className={classes["input-form-modal"]}>
        <div>{inputComponents}</div>

        <div className={classes["buttons"]}>
          <Button type="submit" className={classes["button"]}>
            {submitButtonText}
          </Button>

          <Button className={classes["button"]} onClick={closeModal}>
            Close
          </Button>
        </div>
      </form>
    </ModalWindow>
  );
};

export default InputFormModal;
