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
  constructor(value) {
    // Iterate over the properties of the 'value' object
    for (const key in value) {
      if (value.hasOwnProperty(key)) {
        // Assign each property to the instance
        this[key] = value[key];
      }
    }
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
      if (target[i].type === "file") {
        res[target[i].name] = target[i].files[0];
      }
    }
    return res;
  }

  buildComponent(i) {
    if (this.type === InputTypes.TEXT) {
      return (
        <div key={i}>
          {
            <div className={classes["input"]}>
              <div className={classes["input-description"]}>
                {this.description}
              </div>
              <input
                name={this.name}
                className={classes["input-data"]}
                type="text"
                placeholder={this.placeholder}
                maxLength={this.maxLength}
                required={this.isRequired}
                defaultValue={this.initialValue}
              />
            </div>
          }
        </div>
      );
    }
    if (this.type === InputTypes.NUMBER) {
      return (
        <div key={i}>
          {
            <div className={classes["input"]}>
              <div className={classes["input-description"]}>
                {this.description}
              </div>
              <input
                name={this.name}
                className={classes["input-data"]}
                type="number"
                placeholder={this.placeholder}
                required={this.isRequired}
                defaultValue={this.initialValue}
              />
            </div>
          }
        </div>
      );
    }
    if (this.type === InputTypes.IMAGE) {
      return (
        <div className={classes["input"]} key={i}>
          <div className={classes["input-description"]}>{this.description}</div>
          <input
            name={this.name}
            className={classes["input-data"]}
            type="file"
            accept=".png, .jpg, .jpeg, .svg"
            multiple={false}
            required={this.isRequired}
          />
        </div>
      );
    }
    if (this.type === InputTypes.DATE) {
      return (
        <div className={classes["input-date-and-time"]} key={i}>
          {
            <div className={classes["input"]}>
              <div className={classes["input-description"]}>
                {this.description}
              </div>
              <input
                name={this.name}
                className={classes["input-data"]}
                type="date"
                placeholder={this.placeholder}
                maxLength={this.maxLength}
                required={this.isRequired}
                defaultValue={inputFormatDate(this.initialValue)}
              />
            </div>
          }
          {
            <div className={classes["input"]}>
              <div className={classes["input-description"]}>
                time
              </div>
              <input
                name={this.name + "Time"}
                className={classes["input-data"]}
                type="time"
                placeholder={this.placeholder}
                maxLength={this.maxLength}
                required={this.isRequired}
                defaultValue={inputFormatTime(this.initialValue)}
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
