import React, { useState } from "react";

import classes from "./InputFormModal.module.css";

import Button from "../../UI/Button/Button.js";
import ModalWindow from "../../UI/ModalWindow/ModalWindow";
import { inputFormatTime, inputFormatDate } from "../../../lib/Utils";

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
  initialValue,
  handleOnChange,
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
      onChange={handleOnChange}
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

  buildComponent(handleOnChange) {
    if (this.type === InpputTypes.TEXT) {
      return inputComponent(
        this.description,
        this.name,
        "text",
        this.placeholder,
        this.maxLength,
        this.isRequired,
        this.initialValue,
        handleOnChange,
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
            this.initialValue ? inputFormatDate(this.initialValue) : "",
            handleOnChange,
          )}
          {inputComponent(
            this.description + " time",
            this.name + "Time",
            "time",
            this.placeholder,
            this.maxLength,
            this.isRequired,
            this.initialValue ? inputFormatTime(this.initialValue) : "",
            handleOnChange,
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
  const initValue = inputs
    ? inputs.reduce((obj, input) => {
        return {
          ...obj,
          [input.name]: input.initialValue,
        };
      }, {})
    : {};
  const [inputValue, setInputValue] = useState(initValue);

  const handleOnChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (submitHandler) {
      submitHandler(inputValue);
    }
    closeModal();
  };

  const inputComponents = inputs
    ? inputs.map((input) => input.buildComponent(handleOnChange))
    : null;

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
