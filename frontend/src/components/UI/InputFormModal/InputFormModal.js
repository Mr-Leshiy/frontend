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
  NUMBER: "number",
  DATE: "date",
  IMAGE: "image",
};

export class Input {
  constructor(input_type, input_options) {
    this.input_type = input_type;
    this.input_options = input_options;
  }

  static retrieveValueFromForm(target) {
    let res = {};
    for (let i = 0; i < target.length; i++) {
      if (target[i].type === "text") {
        res[target[i].name] = target[i].value;
      }
      if (target[i].type === "number") {
        res[target[i].name] = target[i].value;
      }
      if (target[i].type === "date") {
        // Date and Time inputs should go one by one
        res[target[i].name] = dateFromInput(target[i].value, target[++i].value);
      }
      if (target[i].type === "file") {
        res[target[i].name] = target[i].files[0];
      }
    }
    return res;
  }

  buildComponent(i) {
    if (this.input_type === InputTypes.TEXT) {
      return (
        <div key={i}>
          {
            <div className={classes["input"]}>
              <div className={classes["input-description"]}>
                {this.input_options.description}
              </div>
              <input
                name={this.input_options.name}
                className={classes["input-data"]}
                type="text"
                placeholder={this.input_options.placeholder}
                maxLength={this.input_options.maxLength}
                required={this.input_options.required}
                defaultValue={this.input_options.defaultValue}
              />
            </div>
          }
        </div>
      );
    }
    if (this.input_type === InputTypes.NUMBER) {
      return (
        <div key={i}>
          {
            <div className={classes["input"]}>
              <div className={classes["input-description"]}>
                {this.input_options.description}
              </div>
              <input
                name={this.input_options.name}
                className={classes["input-data"]}
                type="number"
                placeholder={this.input_options.placeholder}
                required={this.input_options.required}
                defaultValue={this.input_options.defaultValue}
                min={this.input_options.min}
                max={this.input_options.max}
                step={this.input_options.step}
              />
            </div>
          }
        </div>
      );
    }
    if (this.input_type === InputTypes.IMAGE) {
      return (
        <div className={classes["input"]} key={i}>
          <div className={classes["input-description"]}>
            {this.input_options.description}
          </div>
          <input
            name={this.input_options.name}
            className={classes["input-data"]}
            type="file"
            accept=".png, .jpg, .jpeg, .svg"
            multiple={false}
            required={this.input_options.required}
          />
        </div>
      );
    }
    if (this.input_type === InputTypes.DATE) {
      return (
        <div className={classes["input-date-and-time"]} key={i}>
          {
            <div className={classes["input"]}>
              <div className={classes["input-description"]}>
                {this.input_options.description}
              </div>
              <input
                name={this.input_options.name}
                className={classes["input-data"]}
                type="date"
                placeholder={this.input_options.placeholder}
                maxLength={this.input_options.maxLength}
                required={this.input_options.required}
                defaultValue={inputFormatDate(this.input_options.defaultValue)}
              />
            </div>
          }
          {
            <div className={classes["input"]}>
              <div className={classes["input-description"]}>time</div>
              <input
                name={this.input_options.name + "Time"}
                className={classes["input-data"]}
                type="time"
                placeholder={this.input_options.placeholder}
                maxLength={this.input_options.maxLength}
                required={this.input_options.required}
                defaultValue={inputFormatTime(this.input_options.defaultValue)}
              />
            </div>
          }
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

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (submitHandler) {
      let inputValue = Input.retrieveValueFromForm(event.target);
      await submitHandler(inputValue);
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
        </div>
      </form>
    </ModalWindow>
  );
};

export default InputFormModal;
