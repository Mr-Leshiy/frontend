import React from "react";

import classes from "./EditModal.module.css";

import ModalWindow from "../../UI/ModalWindow/ModalWindow";
import Button from "../../UI/Button/Button";

export const InputType = {
  date_and_time: "date_and_time",
};

const EditModal = (props) => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <ModalWindow isOpen={props.isOpen} onRequestClose={props.onRequestClose}>
      <div className={classes["edit-modal"]}>
        <form onSubmit={onSubmitHandler}>
          <div className={classes["buttons"]}>
            <Button type="submit" className={classes["button"]}>
              Apply
            </Button>
          </div>
        </form>
      </div>
    </ModalWindow>
  );
};

export default EditModal;
